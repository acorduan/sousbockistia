# -*- coding: utf-8 -*-

import scrapy
from scrapy.selector import Selector
from cocktailsScrapy.items import CocktailItem
from scrapy.http import Request

class CocktailSpider(scrapy.Spider):
	name = '1001cocktails'
	allowed_domains = ['1001cocktails.com']
	start_urls = ['http://www.1001cocktails.com/cocktails/recettes-meilleurs-0.html']
	root = 'http://www.1001cocktails.com'

	# Parse de chaque lien vers le cocktail
	def parse(self, response):
		cocktails = Selector(response).xpath('//*[@id="content"]/a')
		crawledLinks = []

		# Crawl recursive
		for cocktail in cocktails:
			url = cocktail.xpath('@href').extract()[0]
			crawledLinks.append(url)
			yield Request(self.root + url,callback=self.parseCockatil)

	# Parse de chaque cocktail
	def parseCockatil(self, response):
		cocktailItem = CocktailItem()
		cocktailItem['ingredients'] = Selector(response).xpath('//*[@id="content"]/div/table/tr/td[2]/table/tr/td[3]/div/table/tr/td/table/tr/td/text()').extract()
		cocktailItem['nom'] = Selector(response).xpath('//*[@id="content"]/div/table/tr/td[2]/div[1]/h1/text()').extract()[0]
		cocktailItem['preparation'] = Selector(response).xpath('//*[@id="content"]/div/span[2]/text()').extract()
		cocktailItem['image_urls'] = [ self.root + Selector(response).xpath('//*[@id="content"]/div/table/tr/td[1]/img/@src').extract()[0] ]
		yield cocktailItem