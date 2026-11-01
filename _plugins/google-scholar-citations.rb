require "active_support/all"

module Helpers
  extend ActiveSupport::NumberHelper
end

module Jekyll
  # Renders a paper's Google Scholar citation count from _data/citations.yml.
  # Google Scholar blocks GitHub's build servers, so counts are cached in that file
  # by bin/update_citations.py and this tag never calls Scholar at build time.
  # Usage: {% google_scholar_citations scholar_userid google_scholar_id %}
  class GoogleScholarCitationsTag < Liquid::Tag
    def initialize(tag_name, params, tokens)
      super
      splitted = params.split(" ").map(&:strip)
      @article_id = splitted[1]

      if @article_id.nil? || @article_id.empty?
        puts "Invalid article_id provided"
      end
    end

    def render(context)
      article_id = context[@article_id.strip].to_s
      counts = context.registers[:site].data.dig("citations", "counts") || {}
      count = counts[article_id]

      if count.nil?
        puts "No cached citation count for #{article_id}; run bin/update_citations.py"
        return "N/A"
      end

      Helpers.number_to_human(count.to_i, :format => '%n%u', :precision => 2, :units => { :thousand => 'K', :million => 'M', :billion => 'B' })
    end
  end
end

Liquid::Template.register_tag('google_scholar_citations', Jekyll::GoogleScholarCitationsTag)
