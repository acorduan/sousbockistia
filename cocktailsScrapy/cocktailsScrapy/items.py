# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class CocktailItem(scrapy.Item):
	idCocktail = scrapy.Field()
	favoris = scrapy.Field()
	nom = scrapy.Field()
	categorie = scrapy.Field()
	image_urls = scrapy.Field()
	images = scrapy.Field()
	preparation = scrapy.Field()
	ingredients = scrapy.Field()
	dateDeModification = scrapy.Field()
	dateDeModification = scrapy.Field()

class IngredientItem(scrapy.Item):
	nom = scrapy.Field()
	dosage = scrapy.Field()
	unite = scrapy.Field()
