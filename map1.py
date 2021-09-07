import folium
import pandas

data= pandas.read_csv("big7.txt")
lat=list(data["LAT"])
lon=list(data["LON"])
geo=list(data["GEO"])

def color_prod():
    if go=="SW":
        return 'green'
    elif go=="SS":
        return 'blue'
    elif go=="NC":
        return 'orange'
    elif go=="SE":
        return 'purple'
    else:
        return 'red'
map = folium.Map(location=[9.40026, 8.23246], zoom_start=6,
                 tiles='https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?'
                       'access_token=pk.eyJ1IjoibWFyc2hhbHdhaGxleHl6IiwiYSI6ImNrcjlwNmY3bTQ4NWYybnFobjJpaHU4YWMifQ.H73pV7I1ZUP9Zp9ug4AHCg',
    attr='mapbox bright')

fgm= folium.FeatureGroup(name="My Map")

for lt,ln,go in zip (lat, lon, geo):
    fgm.add_child(folium.Marker(location=[lt,ln],popup=go,
    icon=folium.Icon(color=color_prod())))

fgp= folium.FeatureGroup(name="Population")
fgp.add_child(folium.GeoJson(data=open('world.json','r',encoding='utf-8-sig').read(),
style_function=lambda x: {'fillColor':'green' if x ['properties']['POP2005'] < 10000000
else 'orange' if 10000000 <= x['properties']['POP2005']<20000000 else 'red'}))

map.add_child(fgm)
map.add_child(fgp)
map.add_child(folium.LayerControl())
map.save("Map1.html")
