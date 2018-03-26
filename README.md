# CapitalOneChallenge


For this challenge I looked at various metrics/trends of San Francisco Fire Department using data visualization tools in the market.

For the first task the I looked at the general locations of the calls to the department to see where most distress was concentrated in. I did this using the Google maps API and providing the longitude and latitude provided to us. With this information, one could assume that the rate of crime of rate is not insignificant in those areas. Although the targets are a bit large and hard to tell where the density of the calls were coming from, you could zoom into it and see exactly where the calls were coming from. I also observed the number of calls per call type, to see what kind of emergency was most prevalent. Overwhelmingly, however, the threats were life-threatening, which is unfortunate. However,  the rate of fires is going down which seems to making the fire dept somewhat antiquated. The third is pretty self explanatory, it's just the number of calls received per day, I wanted to see if the day of the week affected the number of calls made. The last two graphs were made using Chart.js.



For the last two tasks, I coded up a dispatch predictor that would predict the type of dispatch unit based on the time, latitude and longitude, to do this, I simply looked at all the data that existed before and found the most called for unit in the past to predict the future unit. For the time it takes to dispatch vs the area, I drew a line plot of the corresponding zip codes, but now that I think about it I should've used a map. At the zip code 94134, the time it takes to dispatch is much higher than all the other zip codes, so I would put a new station there.