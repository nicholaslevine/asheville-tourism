export type HistogramBin = { binStart: number; binEnd: number; count: number };
export type RoomTypeBox = { roomType: string; min: number; q1: number; median: number; q3: number; max: number; count: number };
export type ScatterPoint = { x: number; y: number };
export type LocationPoint = { longitude: number; latitude: number; price: number };
export type FeatureImportance = { feature: string; importance: number };

export const chartData = {
  "priceHistogram": [
    {
      "binStart": 0.0,
      "binEnd": 125.0,
      "count": 4803
    },
    {
      "binStart": 125.0,
      "binEnd": 250.0,
      "count": 3634
    },
    {
      "binStart": 250.0,
      "binEnd": 375.0,
      "count": 1059
    },
    {
      "binStart": 375.0,
      "binEnd": 500.0,
      "count": 347
    },
    {
      "binStart": 500.0,
      "binEnd": 625.0,
      "count": 127
    },
    {
      "binStart": 625.0,
      "binEnd": 750.0,
      "count": 55
    },
    {
      "binStart": 750.0,
      "binEnd": 875.0,
      "count": 29
    },
    {
      "binStart": 875.0,
      "binEnd": 1000.0,
      "count": 38
    },
    {
      "binStart": 1000.0,
      "binEnd": 1125.0,
      "count": 13
    },
    {
      "binStart": 1125.0,
      "binEnd": 1250.0,
      "count": 18
    },
    {
      "binStart": 1250.0,
      "binEnd": 1375.0,
      "count": 10
    },
    {
      "binStart": 1375.0,
      "binEnd": 1500.0,
      "count": 6
    },
    {
      "binStart": 1500.0,
      "binEnd": 1625.0,
      "count": 8
    },
    {
      "binStart": 1625.0,
      "binEnd": 1750.0,
      "count": 6
    },
    {
      "binStart": 1750.0,
      "binEnd": 1875.0,
      "count": 4
    },
    {
      "binStart": 1875.0,
      "binEnd": 2000.0,
      "count": 4
    },
    {
      "binStart": 2000.0,
      "binEnd": 2125.0,
      "count": 5
    },
    {
      "binStart": 2125.0,
      "binEnd": 2250.0,
      "count": 0
    },
    {
      "binStart": 2250.0,
      "binEnd": 2375.0,
      "count": 6
    },
    {
      "binStart": 2375.0,
      "binEnd": 2500.0,
      "count": 0
    }
  ],
  "roomTypePriceBoxplot": [
    {
      "roomType": "Entire home/apt",
      "min": 18.0,
      "q1": 98.0,
      "median": 135.0,
      "q3": 210.0,
      "max": 378.0,
      "count": 9215
    },
    {
      "roomType": "Hotel room",
      "min": 93.0,
      "q1": 110.0,
      "median": 123.0,
      "q3": 330.0,
      "max": 494.0,
      "count": 46
    },
    {
      "roomType": "Private room",
      "min": 27.0,
      "q1": 53.0,
      "median": 70.0,
      "q3": 96.0,
      "max": 153.0,
      "count": 890
    },
    {
      "roomType": "Shared room",
      "min": 18.0,
      "q1": 22.0,
      "median": 40.0,
      "q3": 48.0,
      "max": 63.0,
      "count": 32
    }
  ],
  "priceVsAccommodates": [
    {
      "x": 6.0,
      "y": 304.0
    },
    {
      "x": 6.0,
      "y": 265.0
    },
    {
      "x": 5.0,
      "y": 142.0
    },
    {
      "x": 2.0,
      "y": 100.0
    },
    {
      "x": 4.0,
      "y": 270.0
    },
    {
      "x": 4.0,
      "y": 164.0
    },
    {
      "x": 6.0,
      "y": 145.0
    },
    {
      "x": 4.0,
      "y": 177.0
    },
    {
      "x": 3.0,
      "y": 59.0
    },
    {
      "x": 5.0,
      "y": 105.0
    },
    {
      "x": 2.0,
      "y": 53.0
    },
    {
      "x": 4.0,
      "y": 72.0
    },
    {
      "x": 6.0,
      "y": 210.0
    },
    {
      "x": 6.0,
      "y": 68.0
    },
    {
      "x": 2.0,
      "y": 105.0
    },
    {
      "x": 16.0,
      "y": 930.0
    },
    {
      "x": 4.0,
      "y": 174.0
    },
    {
      "x": 9.0,
      "y": 189.0
    },
    {
      "x": 4.0,
      "y": 79.0
    },
    {
      "x": 4.0,
      "y": 263.0
    },
    {
      "x": 4.0,
      "y": 100.0
    },
    {
      "x": 2.0,
      "y": 52.0
    },
    {
      "x": 3.0,
      "y": 84.0
    },
    {
      "x": 6.0,
      "y": 150.0
    },
    {
      "x": 4.0,
      "y": 258.0
    },
    {
      "x": 3.0,
      "y": 117.0
    },
    {
      "x": 2.0,
      "y": 76.0
    },
    {
      "x": 6.0,
      "y": 131.0
    },
    {
      "x": 4.0,
      "y": 125.0
    },
    {
      "x": 6.0,
      "y": 94.0
    },
    {
      "x": 6.0,
      "y": 132.0
    },
    {
      "x": 8.0,
      "y": 186.0
    },
    {
      "x": 4.0,
      "y": 175.0
    },
    {
      "x": 12.0,
      "y": 423.0
    },
    {
      "x": 5.0,
      "y": 136.0
    },
    {
      "x": 2.0,
      "y": 91.0
    },
    {
      "x": 3.0,
      "y": 117.0
    },
    {
      "x": 6.0,
      "y": 147.0
    },
    {
      "x": 8.0,
      "y": 268.0
    },
    {
      "x": 2.0,
      "y": 66.0
    },
    {
      "x": 4.0,
      "y": 80.0
    },
    {
      "x": 2.0,
      "y": 175.0
    },
    {
      "x": 3.0,
      "y": 58.0
    },
    {
      "x": 2.0,
      "y": 283.0
    },
    {
      "x": 6.0,
      "y": 205.0
    },
    {
      "x": 2.0,
      "y": 125.0
    },
    {
      "x": 16.0,
      "y": 964.0
    },
    {
      "x": 2.0,
      "y": 72.0
    },
    {
      "x": 5.0,
      "y": 153.0
    },
    {
      "x": 6.0,
      "y": 129.0
    },
    {
      "x": 3.0,
      "y": 62.0
    },
    {
      "x": 10.0,
      "y": 299.0
    },
    {
      "x": 2.0,
      "y": 215.0
    },
    {
      "x": 2.0,
      "y": 180.0
    },
    {
      "x": 2.0,
      "y": 114.0
    },
    {
      "x": 5.0,
      "y": 88.0
    },
    {
      "x": 7.0,
      "y": 231.0
    },
    {
      "x": 4.0,
      "y": 450.0
    },
    {
      "x": 2.0,
      "y": 169.0
    },
    {
      "x": 6.0,
      "y": 389.0
    },
    {
      "x": 2.0,
      "y": 170.0
    },
    {
      "x": 8.0,
      "y": 265.0
    },
    {
      "x": 4.0,
      "y": 113.0
    },
    {
      "x": 2.0,
      "y": 134.0
    },
    {
      "x": 2.0,
      "y": 109.0
    },
    {
      "x": 5.0,
      "y": 113.0
    },
    {
      "x": 6.0,
      "y": 175.0
    },
    {
      "x": 8.0,
      "y": 176.0
    },
    {
      "x": 6.0,
      "y": 91.0
    },
    {
      "x": 8.0,
      "y": 200.0
    },
    {
      "x": 9.0,
      "y": 413.0
    },
    {
      "x": 16.0,
      "y": 411.0
    },
    {
      "x": 8.0,
      "y": 230.0
    },
    {
      "x": 12.0,
      "y": 111.0
    },
    {
      "x": 1.0,
      "y": 61.0
    },
    {
      "x": 2.0,
      "y": 251.0
    },
    {
      "x": 2.0,
      "y": 76.0
    },
    {
      "x": 4.0,
      "y": 206.0
    },
    {
      "x": 6.0,
      "y": 173.0
    },
    {
      "x": 2.0,
      "y": 54.0
    },
    {
      "x": 7.0,
      "y": 234.0
    },
    {
      "x": 9.0,
      "y": 513.0
    },
    {
      "x": 6.0,
      "y": 81.0
    },
    {
      "x": 2.0,
      "y": 88.0
    },
    {
      "x": 2.0,
      "y": 126.0
    },
    {
      "x": 2.0,
      "y": 92.0
    },
    {
      "x": 16.0,
      "y": 361.0
    },
    {
      "x": 2.0,
      "y": 79.0
    },
    {
      "x": 3.0,
      "y": 125.0
    },
    {
      "x": 1.0,
      "y": 65.0
    },
    {
      "x": 2.0,
      "y": 92.0
    },
    {
      "x": 6.0,
      "y": 211.0
    },
    {
      "x": 9.0,
      "y": 193.0
    },
    {
      "x": 4.0,
      "y": 124.0
    },
    {
      "x": 2.0,
      "y": 82.0
    },
    {
      "x": 2.0,
      "y": 180.0
    },
    {
      "x": 2.0,
      "y": 119.0
    },
    {
      "x": 8.0,
      "y": 502.0
    },
    {
      "x": 3.0,
      "y": 146.0
    },
    {
      "x": 4.0,
      "y": 115.0
    },
    {
      "x": 2.0,
      "y": 80.0
    },
    {
      "x": 9.0,
      "y": 125.0
    },
    {
      "x": 4.0,
      "y": 99.0
    },
    {
      "x": 8.0,
      "y": 138.0
    },
    {
      "x": 3.0,
      "y": 109.0
    },
    {
      "x": 2.0,
      "y": 129.0
    },
    {
      "x": 2.0,
      "y": 65.0
    },
    {
      "x": 4.0,
      "y": 88.0
    },
    {
      "x": 4.0,
      "y": 143.0
    },
    {
      "x": 2.0,
      "y": 124.0
    },
    {
      "x": 2.0,
      "y": 101.0
    },
    {
      "x": 2.0,
      "y": 90.0
    },
    {
      "x": 6.0,
      "y": 308.0
    },
    {
      "x": 5.0,
      "y": 85.0
    },
    {
      "x": 3.0,
      "y": 142.0
    },
    {
      "x": 8.0,
      "y": 676.0
    },
    {
      "x": 2.0,
      "y": 81.0
    },
    {
      "x": 3.0,
      "y": 104.0
    },
    {
      "x": 6.0,
      "y": 182.0
    },
    {
      "x": 14.0,
      "y": 452.0
    },
    {
      "x": 10.0,
      "y": 231.0
    },
    {
      "x": 3.0,
      "y": 83.0
    },
    {
      "x": 2.0,
      "y": 77.0
    },
    {
      "x": 2.0,
      "y": 142.0
    },
    {
      "x": 4.0,
      "y": 80.0
    },
    {
      "x": 4.0,
      "y": 108.0
    },
    {
      "x": 8.0,
      "y": 214.0
    },
    {
      "x": 8.0,
      "y": 149.0
    },
    {
      "x": 6.0,
      "y": 209.0
    },
    {
      "x": 4.0,
      "y": 130.0
    },
    {
      "x": 3.0,
      "y": 142.0
    },
    {
      "x": 6.0,
      "y": 200.0
    },
    {
      "x": 2.0,
      "y": 197.0
    },
    {
      "x": 7.0,
      "y": 124.0
    },
    {
      "x": 4.0,
      "y": 335.0
    },
    {
      "x": 4.0,
      "y": 122.0
    },
    {
      "x": 6.0,
      "y": 415.0
    },
    {
      "x": 2.0,
      "y": 52.0
    },
    {
      "x": 5.0,
      "y": 88.0
    },
    {
      "x": 10.0,
      "y": 112.0
    },
    {
      "x": 2.0,
      "y": 118.0
    },
    {
      "x": 2.0,
      "y": 58.0
    },
    {
      "x": 2.0,
      "y": 107.0
    },
    {
      "x": 2.0,
      "y": 91.0
    },
    {
      "x": 2.0,
      "y": 68.0
    },
    {
      "x": 2.0,
      "y": 89.0
    },
    {
      "x": 9.0,
      "y": 366.0
    },
    {
      "x": 13.0,
      "y": 226.0
    },
    {
      "x": 6.0,
      "y": 484.0
    },
    {
      "x": 4.0,
      "y": 113.0
    },
    {
      "x": 10.0,
      "y": 574.0
    },
    {
      "x": 7.0,
      "y": 186.0
    },
    {
      "x": 3.0,
      "y": 67.0
    },
    {
      "x": 8.0,
      "y": 405.0
    },
    {
      "x": 6.0,
      "y": 84.0
    },
    {
      "x": 2.0,
      "y": 79.0
    },
    {
      "x": 6.0,
      "y": 308.0
    },
    {
      "x": 14.0,
      "y": 466.0
    },
    {
      "x": 6.0,
      "y": 185.0
    },
    {
      "x": 2.0,
      "y": 89.0
    },
    {
      "x": 2.0,
      "y": 75.0
    },
    {
      "x": 8.0,
      "y": 121.0
    },
    {
      "x": 4.0,
      "y": 120.0
    },
    {
      "x": 6.0,
      "y": 145.0
    },
    {
      "x": 5.0,
      "y": 96.0
    },
    {
      "x": 8.0,
      "y": 290.0
    },
    {
      "x": 11.0,
      "y": 344.0
    },
    {
      "x": 2.0,
      "y": 79.0
    },
    {
      "x": 5.0,
      "y": 159.0
    },
    {
      "x": 4.0,
      "y": 97.0
    },
    {
      "x": 6.0,
      "y": 189.0
    },
    {
      "x": 3.0,
      "y": 91.0
    },
    {
      "x": 2.0,
      "y": 175.0
    },
    {
      "x": 2.0,
      "y": 122.0
    },
    {
      "x": 8.0,
      "y": 200.0
    },
    {
      "x": 5.0,
      "y": 225.0
    },
    {
      "x": 2.0,
      "y": 68.0
    },
    {
      "x": 4.0,
      "y": 173.0
    },
    {
      "x": 2.0,
      "y": 69.0
    },
    {
      "x": 4.0,
      "y": 70.0
    }
  ],
  "locationByPrice": [
    {
      "longitude": -82.55523,
      "latitude": 35.58702,
      "price": 304.0
    },
    {
      "longitude": -82.5569,
      "latitude": 35.5914,
      "price": 265.0
    },
    {
      "longitude": -82.58174,
      "latitude": 35.62985,
      "price": 142.0
    },
    {
      "longitude": -82.5867925,
      "latitude": 35.5840092,
      "price": 100.0
    },
    {
      "longitude": -82.55167,
      "latitude": 35.59571,
      "price": 270.0
    },
    {
      "longitude": -82.55594,
      "latitude": 35.60644,
      "price": 164.0
    },
    {
      "longitude": -82.55826,
      "latitude": 35.59791,
      "price": 145.0
    },
    {
      "longitude": -82.5499229,
      "latitude": 35.5932046,
      "price": 177.0
    },
    {
      "longitude": -82.50304588822374,
      "latitude": 35.55295561493308,
      "price": 59.0
    },
    {
      "longitude": -82.53908,
      "latitude": 35.56276,
      "price": 105.0
    },
    {
      "longitude": -82.59421,
      "latitude": 35.57591,
      "price": 53.0
    },
    {
      "longitude": -82.6262,
      "latitude": 35.57789,
      "price": 72.0
    },
    {
      "longitude": -82.5324,
      "latitude": 35.60144,
      "price": 210.0
    },
    {
      "longitude": -82.50636,
      "latitude": 35.55338,
      "price": 68.0
    },
    {
      "longitude": -82.50478,
      "latitude": 35.43052,
      "price": 105.0
    },
    {
      "longitude": -82.53834,
      "latitude": 35.45628,
      "price": 930.0
    },
    {
      "longitude": -82.5497,
      "latitude": 35.59205,
      "price": 174.0
    },
    {
      "longitude": -82.60979,
      "latitude": 35.50915,
      "price": 189.0
    },
    {
      "longitude": -82.57366943359375,
      "latitude": 35.56944274902344,
      "price": 79.0
    },
    {
      "longitude": -82.5513958,
      "latitude": 35.5963919,
      "price": 263.0
    },
    {
      "longitude": -82.54974,
      "latitude": 35.63975,
      "price": 100.0
    },
    {
      "longitude": -82.5448,
      "latitude": 35.59352,
      "price": 52.0
    },
    {
      "longitude": -82.57785,
      "latitude": 35.5736,
      "price": 84.0
    },
    {
      "longitude": -82.60409,
      "latitude": 35.50689,
      "price": 150.0
    },
    {
      "longitude": -82.55167,
      "latitude": 35.59571,
      "price": 258.0
    },
    {
      "longitude": -82.62799512594938,
      "latitude": 35.58629956486725,
      "price": 117.0
    },
    {
      "longitude": -82.55263607872872,
      "latitude": 35.59164610509845,
      "price": 76.0
    },
    {
      "longitude": -82.48819,
      "latitude": 35.542,
      "price": 131.0
    },
    {
      "longitude": -82.51203,
      "latitude": 35.47424,
      "price": 125.0
    },
    {
      "longitude": -82.60928,
      "latitude": 35.52726,
      "price": 94.0
    },
    {
      "longitude": -82.55292,
      "latitude": 35.6227,
      "price": 132.0
    },
    {
      "longitude": -82.47996,
      "latitude": 35.62399,
      "price": 186.0
    },
    {
      "longitude": -82.5295,
      "latitude": 35.53868,
      "price": 175.0
    },
    {
      "longitude": -82.6606937534,
      "latitude": 35.5952937675,
      "price": 423.0
    },
    {
      "longitude": -82.56269,
      "latitude": 35.59043,
      "price": 136.0
    },
    {
      "longitude": -82.56840609999999,
      "latitude": 35.4567281,
      "price": 91.0
    },
    {
      "longitude": -82.63637545609134,
      "latitude": 35.548148741080055,
      "price": 117.0
    },
    {
      "longitude": -82.6389,
      "latitude": 35.57239,
      "price": 147.0
    },
    {
      "longitude": -82.49847,
      "latitude": 35.63224,
      "price": 268.0
    },
    {
      "longitude": -82.55876,
      "latitude": 35.59201,
      "price": 66.0
    },
    {
      "longitude": -82.59132,
      "latitude": 35.56711,
      "price": 80.0
    },
    {
      "longitude": -82.53427,
      "latitude": 35.55316,
      "price": 175.0
    },
    {
      "longitude": -82.57609941065311,
      "latitude": 35.60455806065485,
      "price": 58.0
    },
    {
      "longitude": -82.56401,
      "latitude": 35.60703,
      "price": 283.0
    },
    {
      "longitude": -82.59675,
      "latitude": 35.57851,
      "price": 205.0
    },
    {
      "longitude": -82.54925146987613,
      "latitude": 35.60440973624974,
      "price": 125.0
    },
    {
      "longitude": -82.52121,
      "latitude": 35.61559,
      "price": 964.0
    },
    {
      "longitude": -82.55832,
      "latitude": 35.60239,
      "price": 72.0
    },
    {
      "longitude": -82.5246353149414,
      "latitude": 35.56649398803711,
      "price": 153.0
    },
    {
      "longitude": -82.46566,
      "latitude": 35.43843,
      "price": 129.0
    },
    {
      "longitude": -82.55778,
      "latitude": 35.61216,
      "price": 62.0
    },
    {
      "longitude": -82.56868819867331,
      "latitude": 35.49083555440738,
      "price": 299.0
    },
    {
      "longitude": -82.55129578987925,
      "latitude": 35.59507435322864,
      "price": 215.0
    },
    {
      "longitude": -82.55858,
      "latitude": 35.59973,
      "price": 180.0
    },
    {
      "longitude": -82.56841059999999,
      "latitude": 35.4567286,
      "price": 114.0
    },
    {
      "longitude": -82.61207,
      "latitude": 35.63116,
      "price": 88.0
    },
    {
      "longitude": -82.48809627,
      "latitude": 35.54862033,
      "price": 231.0
    },
    {
      "longitude": -82.50786,
      "latitude": 35.46379,
      "price": 450.0
    },
    {
      "longitude": -82.51805,
      "latitude": 35.56502,
      "price": 169.0
    },
    {
      "longitude": -82.5566889,
      "latitude": 35.5925442,
      "price": 389.0
    },
    {
      "longitude": -82.55725,
      "latitude": 35.57481,
      "price": 170.0
    },
    {
      "longitude": -82.63166,
      "latitude": 35.5322,
      "price": 265.0
    },
    {
      "longitude": -82.5462,
      "latitude": 35.60287,
      "price": 113.0
    },
    {
      "longitude": -82.5127466,
      "latitude": 35.5323861,
      "price": 134.0
    },
    {
      "longitude": -82.53800849999999,
      "latitude": 35.5757306,
      "price": 109.0
    },
    {
      "longitude": -82.60351,
      "latitude": 35.59583,
      "price": 113.0
    },
    {
      "longitude": -82.51328,
      "latitude": 35.53232,
      "price": 175.0
    },
    {
      "longitude": -82.573983,
      "latitude": 35.6417298,
      "price": 176.0
    },
    {
      "longitude": -82.57111534472178,
      "latitude": 35.46618679738023,
      "price": 91.0
    },
    {
      "longitude": -82.46245,
      "latitude": 35.46654,
      "price": 200.0
    },
    {
      "longitude": -82.537659,
      "latitude": 35.59383,
      "price": 413.0
    },
    {
      "longitude": -82.4784791,
      "latitude": 35.45753270000001,
      "price": 411.0
    },
    {
      "longitude": -82.55713,
      "latitude": 35.59319,
      "price": 230.0
    },
    {
      "longitude": -82.59311,
      "latitude": 35.59725,
      "price": 111.0
    },
    {
      "longitude": -82.57138,
      "latitude": 35.62145,
      "price": 61.0
    },
    {
      "longitude": -82.5468,
      "latitude": 35.62179,
      "price": 251.0
    },
    {
      "longitude": -82.47964,
      "latitude": 35.59476,
      "price": 76.0
    },
    {
      "longitude": -82.53382,
      "latitude": 35.62889,
      "price": 206.0
    },
    {
      "longitude": -82.58173,
      "latitude": 35.48508,
      "price": 173.0
    },
    {
      "longitude": -82.59102,
      "latitude": 35.58027,
      "price": 54.0
    },
    {
      "longitude": -82.5662,
      "latitude": 35.60521,
      "price": 234.0
    },
    {
      "longitude": -82.537659,
      "latitude": 35.59383,
      "price": 513.0
    },
    {
      "longitude": -82.46798748465575,
      "latitude": 35.48429813101743,
      "price": 81.0
    },
    {
      "longitude": -82.58567,
      "latitude": 35.57229,
      "price": 88.0
    },
    {
      "longitude": -82.57208,
      "latitude": 35.63747,
      "price": 126.0
    },
    {
      "longitude": -82.59566,
      "latitude": 35.57659,
      "price": 92.0
    },
    {
      "longitude": -82.48188664617261,
      "latitude": 35.52909877034369,
      "price": 361.0
    },
    {
      "longitude": -82.59392,
      "latitude": 35.57834,
      "price": 79.0
    },
    {
      "longitude": -82.60777,
      "latitude": 35.57466,
      "price": 125.0
    },
    {
      "longitude": -82.59346932208315,
      "latitude": 35.581076386089826,
      "price": 65.0
    },
    {
      "longitude": -82.65697472,
      "latitude": 35.5953417,
      "price": 92.0
    },
    {
      "longitude": -82.52783,
      "latitude": 35.62604,
      "price": 211.0
    },
    {
      "longitude": -82.58247,
      "latitude": 35.61893,
      "price": 193.0
    },
    {
      "longitude": -82.55316,
      "latitude": 35.59502,
      "price": 124.0
    },
    {
      "longitude": -82.5555,
      "latitude": 35.59933,
      "price": 82.0
    },
    {
      "longitude": -82.55719,
      "latitude": 35.57478,
      "price": 180.0
    },
    {
      "longitude": -82.60688,
      "latitude": 35.5828,
      "price": 119.0
    },
    {
      "longitude": -82.55611419677734,
      "latitude": 35.59785461425781,
      "price": 502.0
    },
    {
      "longitude": -82.52928,
      "latitude": 35.50912,
      "price": 146.0
    },
    {
      "longitude": -82.54227,
      "latitude": 35.59426,
      "price": 115.0
    },
    {
      "longitude": -82.57427,
      "latitude": 35.58586,
      "price": 80.0
    },
    {
      "longitude": -82.5731,
      "latitude": 35.44225,
      "price": 125.0
    },
    {
      "longitude": -82.53793,
      "latitude": 35.57522,
      "price": 99.0
    },
    {
      "longitude": -82.48426,
      "latitude": 35.55524,
      "price": 138.0
    },
    {
      "longitude": -82.53192,
      "latitude": 35.56688,
      "price": 109.0
    },
    {
      "longitude": -82.57105,
      "latitude": 35.56763,
      "price": 129.0
    },
    {
      "longitude": -82.51827,
      "latitude": 35.56555,
      "price": 65.0
    },
    {
      "longitude": -82.59356,
      "latitude": 35.57702,
      "price": 88.0
    },
    {
      "longitude": -82.59213,
      "latitude": 35.57591,
      "price": 143.0
    },
    {
      "longitude": -82.54524,
      "latitude": 35.48331,
      "price": 124.0
    },
    {
      "longitude": -82.60866,
      "latitude": 35.58101,
      "price": 101.0
    },
    {
      "longitude": -82.54598,
      "latitude": 35.60313,
      "price": 90.0
    },
    {
      "longitude": -82.55604,
      "latitude": 35.59356,
      "price": 308.0
    },
    {
      "longitude": -82.5748,
      "latitude": 35.62906,
      "price": 85.0
    },
    {
      "longitude": -82.55574,
      "latitude": 35.59769,
      "price": 142.0
    },
    {
      "longitude": -82.5521036,
      "latitude": 35.5971085,
      "price": 676.0
    },
    {
      "longitude": -82.62812,
      "latitude": 35.62541,
      "price": 81.0
    },
    {
      "longitude": -82.61646,
      "latitude": 35.62269,
      "price": 104.0
    },
    {
      "longitude": -82.55728,
      "latitude": 35.59146,
      "price": 182.0
    },
    {
      "longitude": -82.62867659999999,
      "latitude": 35.5368146,
      "price": 452.0
    },
    {
      "longitude": -82.51134,
      "latitude": 35.5524,
      "price": 231.0
    },
    {
      "longitude": -82.61632,
      "latitude": 35.56772,
      "price": 83.0
    },
    {
      "longitude": -82.57785,
      "latitude": 35.57364,
      "price": 77.0
    },
    {
      "longitude": -82.57161,
      "latitude": 35.46133,
      "price": 142.0
    },
    {
      "longitude": -82.55817,
      "latitude": 35.59279,
      "price": 80.0
    },
    {
      "longitude": -82.60551269999999,
      "latitude": 35.5847372,
      "price": 108.0
    },
    {
      "longitude": -82.49847,
      "latitude": 35.63224,
      "price": 214.0
    },
    {
      "longitude": -82.46245,
      "latitude": 35.46654,
      "price": 149.0
    },
    {
      "longitude": -82.47966,
      "latitude": 35.65381,
      "price": 209.0
    },
    {
      "longitude": -82.58391,
      "latitude": 35.58127,
      "price": 130.0
    },
    {
      "longitude": -82.64011,
      "latitude": 35.61837,
      "price": 142.0
    },
    {
      "longitude": -82.55386967032095,
      "latitude": 35.59488059899161,
      "price": 200.0
    },
    {
      "longitude": -82.55396,
      "latitude": 35.59565,
      "price": 197.0
    },
    {
      "longitude": -82.50697326660156,
      "latitude": 35.54914855957031,
      "price": 124.0
    },
    {
      "longitude": -82.55314,
      "latitude": 35.59771,
      "price": 335.0
    },
    {
      "longitude": -82.5606,
      "latitude": 35.57563,
      "price": 122.0
    },
    {
      "longitude": -82.64095,
      "latitude": 35.60542,
      "price": 415.0
    },
    {
      "longitude": -82.5711,
      "latitude": 35.60832,
      "price": 52.0
    },
    {
      "longitude": -82.65829,
      "latitude": 35.55473,
      "price": 88.0
    },
    {
      "longitude": -82.49841,
      "latitude": 35.4771,
      "price": 112.0
    },
    {
      "longitude": -82.48331,
      "latitude": 35.53665,
      "price": 118.0
    },
    {
      "longitude": -82.56129,
      "latitude": 35.60388,
      "price": 58.0
    },
    {
      "longitude": -82.5521,
      "latitude": 35.6107,
      "price": 107.0
    },
    {
      "longitude": -82.56702,
      "latitude": 35.59761,
      "price": 91.0
    },
    {
      "longitude": -82.52089,
      "latitude": 35.56347,
      "price": 68.0
    },
    {
      "longitude": -82.6105439,
      "latitude": 35.5091039,
      "price": 89.0
    },
    {
      "longitude": -82.59203,
      "latitude": 35.48375,
      "price": 366.0
    },
    {
      "longitude": -82.61876400854787,
      "latitude": 35.50085634733665,
      "price": 226.0
    },
    {
      "longitude": -82.56716,
      "latitude": 35.56808,
      "price": 484.0
    },
    {
      "longitude": -82.47612,
      "latitude": 35.49478,
      "price": 113.0
    },
    {
      "longitude": -82.5355106,
      "latitude": 35.6272499,
      "price": 574.0
    },
    {
      "longitude": -82.50848,
      "latitude": 35.55508,
      "price": 186.0
    },
    {
      "longitude": -82.55547,
      "latitude": 35.61234,
      "price": 67.0
    },
    {
      "longitude": -82.58728,
      "latitude": 35.48504,
      "price": 405.0
    },
    {
      "longitude": -82.46798748465575,
      "latitude": 35.48429813101743,
      "price": 84.0
    },
    {
      "longitude": -82.557,
      "latitude": 35.59377,
      "price": 79.0
    },
    {
      "longitude": -82.55604,
      "latitude": 35.59356,
      "price": 308.0
    },
    {
      "longitude": -82.65498,
      "latitude": 35.63892,
      "price": 466.0
    },
    {
      "longitude": -82.57933,
      "latitude": 35.57218,
      "price": 185.0
    },
    {
      "longitude": -82.57193,
      "latitude": 35.65194,
      "price": 89.0
    },
    {
      "longitude": -82.63808,
      "latitude": 35.623,
      "price": 75.0
    },
    {
      "longitude": -82.62692,
      "latitude": 35.57891,
      "price": 121.0
    },
    {
      "longitude": -82.56057,
      "latitude": 35.59938,
      "price": 120.0
    },
    {
      "longitude": -82.58579,
      "latitude": 35.58001,
      "price": 145.0
    },
    {
      "longitude": -82.59458,
      "latitude": 35.57557,
      "price": 96.0
    },
    {
      "longitude": -82.603,
      "latitude": 35.55804,
      "price": 290.0
    },
    {
      "longitude": -82.65384,
      "latitude": 35.57061,
      "price": 344.0
    },
    {
      "longitude": -82.5067,
      "latitude": 35.59228,
      "price": 79.0
    },
    {
      "longitude": -82.54832501181667,
      "latitude": 35.59268856403167,
      "price": 159.0
    },
    {
      "longitude": -82.5246,
      "latitude": 35.42968,
      "price": 97.0
    },
    {
      "longitude": -82.5111744,
      "latitude": 35.5313769,
      "price": 189.0
    },
    {
      "longitude": -82.59761,
      "latitude": 35.57962,
      "price": 91.0
    },
    {
      "longitude": -82.53427,
      "latitude": 35.55316,
      "price": 175.0
    },
    {
      "longitude": -82.5403,
      "latitude": 35.58624,
      "price": 122.0
    },
    {
      "longitude": -82.51724899999999,
      "latitude": 35.55211010000001,
      "price": 200.0
    },
    {
      "longitude": -82.5095,
      "latitude": 35.49706,
      "price": 225.0
    },
    {
      "longitude": -82.56129,
      "latitude": 35.60388,
      "price": 68.0
    },
    {
      "longitude": -82.57853,
      "latitude": 35.65587,
      "price": 173.0
    },
    {
      "longitude": -82.55785,
      "latitude": 35.60113,
      "price": 69.0
    },
    {
      "longitude": -82.5093,
      "latitude": 35.60077,
      "price": 70.0
    },
    {
      "longitude": -82.60998,
      "latitude": 35.5765,
      "price": 302.0
    },
    {
      "longitude": -82.5623,
      "latitude": 35.6241,
      "price": 102.0
    },
    {
      "longitude": -82.59141540527344,
      "latitude": 35.58051681518555,
      "price": 90.0
    },
    {
      "longitude": -82.46789,
      "latitude": 35.60722,
      "price": 500.0
    },
    {
      "longitude": -82.46705,
      "latitude": 35.63337,
      "price": 92.0
    },
    {
      "longitude": -82.56062,
      "latitude": 35.59799,
      "price": 80.0
    },
    {
      "longitude": -82.55323885281469,
      "latitude": 35.593631840224404,
      "price": 180.0
    },
    {
      "longitude": -82.58278,
      "latitude": 35.62667,
      "price": 290.0
    },
    {
      "longitude": -82.55644,
      "latitude": 35.59183,
      "price": 220.0
    },
    {
      "longitude": -82.5683,
      "latitude": 35.56823,
      "price": 102.0
    },
    {
      "longitude": -82.51162839999999,
      "latitude": 35.5325998,
      "price": 167.0
    },
    {
      "longitude": -82.4764718,
      "latitude": 35.5550919,
      "price": 400.0
    },
    {
      "longitude": -82.55671,
      "latitude": 35.59362,
      "price": 65.0
    },
    {
      "longitude": -82.57129,
      "latitude": 35.58564,
      "price": 134.0
    },
    {
      "longitude": -82.48589,
      "latitude": 35.56348,
      "price": 185.0
    },
    {
      "longitude": -82.55033,
      "latitude": 35.59235,
      "price": 158.0
    },
    {
      "longitude": -82.66331,
      "latitude": 35.62486,
      "price": 117.0
    },
    {
      "longitude": -82.54397,
      "latitude": 35.64107,
      "price": 48.0
    },
    {
      "longitude": -82.50799,
      "latitude": 35.60427,
      "price": 87.0
    },
    {
      "longitude": -82.60635,
      "latitude": 35.58824,
      "price": 95.0
    },
    {
      "longitude": -82.57631,
      "latitude": 35.58632,
      "price": 90.0
    },
    {
      "longitude": -82.5561,
      "latitude": 35.59359,
      "price": 261.0
    },
    {
      "longitude": -82.56029,
      "latitude": 35.46353,
      "price": 99.0
    },
    {
      "longitude": -82.62499,
      "latitude": 35.57391,
      "price": 55.0
    },
    {
      "longitude": -82.55649,
      "latitude": 35.58574,
      "price": 93.0
    },
    {
      "longitude": -82.59357,
      "latitude": 35.57402,
      "price": 113.0
    },
    {
      "longitude": -82.58656,
      "latitude": 35.62947,
      "price": 105.0
    },
    {
      "longitude": -82.65695190429688,
      "latitude": 35.594810485839844,
      "price": 102.0
    },
    {
      "longitude": -82.58159,
      "latitude": 35.63566,
      "price": 108.0
    },
    {
      "longitude": -82.55263607872872,
      "latitude": 35.59164610509845,
      "price": 97.0
    },
    {
      "longitude": -82.592049,
      "latitude": 35.61179,
      "price": 183.0
    },
    {
      "longitude": -82.60612,
      "latitude": 35.53499,
      "price": 245.0
    },
    {
      "longitude": -82.56028,
      "latitude": 35.46769,
      "price": 262.0
    },
    {
      "longitude": -82.5403,
      "latitude": 35.59329,
      "price": 116.0
    },
    {
      "longitude": -82.49017,
      "latitude": 35.61341,
      "price": 770.0
    },
    {
      "longitude": -82.49814496249012,
      "latitude": 35.51815032662866,
      "price": 971.0
    },
    {
      "longitude": -82.5789482,
      "latitude": 35.5863838,
      "price": 103.0
    },
    {
      "longitude": -82.5687,
      "latitude": 35.57215,
      "price": 170.0
    },
    {
      "longitude": -82.47991,
      "latitude": 35.62827,
      "price": 101.0
    },
    {
      "longitude": -82.54151,
      "latitude": 35.56578,
      "price": 281.0
    }
  ],
  "featureImportance": [
    {
      "feature": "bathrooms",
      "importance": 0.435292
    },
    {
      "feature": "accommodates",
      "importance": 0.367684
    },
    {
      "feature": "longitude",
      "importance": 0.180595
    },
    {
      "feature": "neighbourhood_cleansed",
      "importance": 0.121333
    },
    {
      "feature": "latitude",
      "importance": 0.104993
    },
    {
      "feature": "amenities_count",
      "importance": 0.086834
    },
    {
      "feature": "room_type",
      "importance": 0.0768
    },
    {
      "feature": "bedrooms",
      "importance": 0.074338
    },
    {
      "feature": "review_scores_rating",
      "importance": 0.0673
    },
    {
      "feature": "review_scores_value",
      "importance": 0.066269
    },
    {
      "feature": "review_scores_cleanliness",
      "importance": 0.053239
    },
    {
      "feature": "review_scores_location",
      "importance": 0.034398
    },
    {
      "feature": "beds",
      "importance": 0.02202
    },
    {
      "feature": "instant_bookable",
      "importance": 0.015479
    },
    {
      "feature": "host_is_superhost",
      "importance": 0.014537
    },
    {
      "feature": "has_reviews",
      "importance": 0.000225
    }
  ],
  "topNeighborhoods": [
    "28806",
    "28801",
    "28803",
    "28804",
    "28805",
    "28704",
    "28715",
    "28732"
  ]
};
