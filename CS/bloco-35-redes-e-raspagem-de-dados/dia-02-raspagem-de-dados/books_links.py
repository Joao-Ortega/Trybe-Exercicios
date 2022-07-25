from parsel import Selector
import requests


BASE_URL = "https://books.toscrape.com/"

response = requests.get(BASE_URL)
selector = Selector(text=response.text)
all_books_links = selector.css("h3 a::attr(href)").getall()

all_descriptions = []

for links in all_books_links:
    resp = requests.get(BASE_URL + links)
    selec = Selector(text=resp.text)
    all_descriptions.append(selec.css("#product_description ~ p::text").get())

print(all_descriptions)