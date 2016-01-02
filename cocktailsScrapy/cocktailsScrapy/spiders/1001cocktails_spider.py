# -*- coding: utf-8 -*-

import scrapy
from scrapy.selector import Selector
from cocktailsScrapy.items import CocktailItem, IngredientItem
from scrapy.http import Request
import datetime
import re

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
		datetimenow = datetime.datetime.now().isoformat()
		cocktailItem = CocktailItem()
		ingredientItem = IngredientItem()

		ingredients = Selector(response).xpath('//*[@id="content"]/div/table/tr/td[2]/table/tr/td[1]/table/tr/td')
		ingredientsTabs = []
		for ingredient in ingredients:
			ingredientItem['dosage'] = ingredient.xpath('span/text()').extract()[0]
			nomS = re.findall(r"[^0-9%]+", ingredient.xpath('span/a[2]/text()').extract()[0], re.UNICODE)
			nom = ""
			for nomTemp in nomS:
				nom = nom + " " + nomTemp  
			ingredientItem['nom'] = nom.strip()
			ingredientsTabs.append(dict(ingredientItem))

		cocktailItem['categorie'] = Selector(response).xpath('//*[@id="content"]/div/span[1]/a[3]/span/text()').extract()[0]
		cocktailItem['ingredients'] = ingredientsTabs
		cocktailItem['nom'] = Selector(response).xpath('//*[@id="content"]/div/table/tr/td[2]/div[1]/h1/text()').extract()[0].strip()
		cocktailItem['preparation'] = Selector(response).xpath('//*[@id="content"]/div/span[2]/text() | //*[@id="content"]/div/span[2]/a//text()').extract()
		
		
		cocktailItem['image_urls'] = [ self.root + Selector(response).xpath('//*[@id="content"]/div/table/tr/td[1]/img/@src').extract()[0] ]
		cocktailItem['dateDeModification'] = datetimenow
		cocktailItem['dateDeModification'] = datetimenow

		yield cocktailItem