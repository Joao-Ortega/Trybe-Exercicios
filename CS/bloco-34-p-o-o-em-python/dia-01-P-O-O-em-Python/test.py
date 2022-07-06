from collections import namedtuple

GeoPoint = namedtuple("GeoPoint", "lat lon")
location = GeoPoint(-22.81711234090266, -47.069559317039655)
print(location.lat)  # muito melhor do que location[0]
