# Vežba: Weather app

Napraviti aplikaciju za vremensku prognozu prilagođenu za mobilni dizajn. 

Aplikacija treba da prikazuje različite boje i ikonice u odnosu na to kakvo će vreme biti danas. Takođe, treba da ima odeljak ili posebnu stranicu sa vremenskom prognozom za narednih par dana. 

Kao izvor podataka koristićemo https://www.metaweather.com/api/

### GET zahtev

Da biste dobili vremensku prognozu za određeni grad u JSON-u, potrebno je da znate jedinstveni identifikacioni broj tog grada (WOEID - Where On Earth ID). Na primer, sledeći GET zahtev vraća podatke za Paris, čiji je id 615702:

https://www.metaweather.com/api/location/615702/

Meta Weather API vraća JSON objekat koji ima svojstvo `consolidated_weather`, koje sadrži niz prognoza za danas i narednih 5 dana. Svaka pojedinačna prognoza ima sledeća bitna svojstva:

```js
{
  "weather_state_name": "Light Rain",
  "weather_state_abbr": "lr", // skraćenica za ikonicu
  "wind_direction_compass": "WSW",
  "applicable_date": "2019-03-02",
  "min_temp": 7.8133333333333335,
  "max_temp": 14.903333333333334,
  "the_temp": 13.535,
  "wind_speed": 7.779704121257854,
  "wind_direction": 257.7286569243198,
  "air_pressure": 1016.4300000000001,
  "humidity": 74,
  "visibility": 11.011940268830031,
  "predictability": 75
}
```

### ID grada

ID nekog grada možete saznati na dva načina: 
- upitom na sledeću adresu: https://www.metaweather.com/api/location/search/?query=paris
- kopiranjem čitavog spiska u vaš projekat: https://codebeautify.org/jsonviewer/f83352

### Ikonice

Meta Weather API nudi gotove ikonice povezane sa poljem `weather_state_abbr`. Na primer, ako je `weather_state_abbr=s` onda učitavate ikonicu na sledeći način:

https://www.metaweather.com/static/img/weather/s.svg

Ako je `weather_state_abbr=lr` onda je src ikonice:

https://www.metaweather.com/static/img/weather/lr.svg
