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
      "count": 1149
    },
    {
      "binStart": 125.0,
      "binEnd": 250.0,
      "count": 924
    },
    {
      "binStart": 250.0,
      "binEnd": 375.0,
      "count": 284
    },
    {
      "binStart": 375.0,
      "binEnd": 500.0,
      "count": 91
    },
    {
      "binStart": 500.0,
      "binEnd": 625.0,
      "count": 35
    },
    {
      "binStart": 625.0,
      "binEnd": 750.0,
      "count": 12
    },
    {
      "binStart": 750.0,
      "binEnd": 875.0,
      "count": 5
    },
    {
      "binStart": 875.0,
      "binEnd": 1000.0,
      "count": 11
    },
    {
      "binStart": 1000.0,
      "binEnd": 1125.0,
      "count": 3
    },
    {
      "binStart": 1125.0,
      "binEnd": 1250.0,
      "count": 4
    },
    {
      "binStart": 1250.0,
      "binEnd": 1375.0,
      "count": 3
    },
    {
      "binStart": 1375.0,
      "binEnd": 1500.0,
      "count": 2
    },
    {
      "binStart": 1500.0,
      "binEnd": 1625.0,
      "count": 2
    },
    {
      "binStart": 1625.0,
      "binEnd": 1750.0,
      "count": 1
    },
    {
      "binStart": 1750.0,
      "binEnd": 1875.0,
      "count": 2
    },
    {
      "binStart": 1875.0,
      "binEnd": 2000.0,
      "count": 1
    },
    {
      "binStart": 2000.0,
      "binEnd": 2125.0,
      "count": 1
    },
    {
      "binStart": 2125.0,
      "binEnd": 2250.0,
      "count": 0
    },
    {
      "binStart": 2250.0,
      "binEnd": 2375.0,
      "count": 2
    },
    {
      "binStart": 2375.0,
      "binEnd": 2500.0,
      "count": 5
    }
  ],
  "roomTypePriceBoxplot": [
    {
      "roomType": "Entire home/apt",
      "min": 18.0,
      "q1": 100.0,
      "median": 139.0,
      "q3": 218.0,
      "max": 395.0,
      "count": 2307
    },
    {
      "roomType": "Hotel room",
      "min": 93.0,
      "q1": 110.5,
      "median": 123.0,
      "q3": 287.5,
      "max": 440.0,
      "count": 11
    },
    {
      "roomType": "Private room",
      "min": 30.0,
      "q1": 53.5,
      "median": 71.0,
      "q3": 96.5,
      "max": 161.0,
      "count": 211
    },
    {
      "roomType": "Shared room",
      "min": 22.0,
      "q1": 22.75,
      "median": 39.0,
      "q3": 45.0,
      "max": 63.0,
      "count": 8
    }
  ],
  "priceVsAccommodates": [
    {
      "x": 4.0,
      "y": 80.0
    },
    {
      "x": 16.0,
      "y": 287.0
    },
    {
      "x": 8.0,
      "y": 232.0
    },
    {
      "x": 4.0,
      "y": 121.0
    },
    {
      "x": 6.0,
      "y": 200.0
    },
    {
      "x": 6.0,
      "y": 205.0
    },
    {
      "x": 12.0,
      "y": 143.0
    },
    {
      "x": 4.0,
      "y": 297.0
    },
    {
      "x": 4.0,
      "y": 104.0
    },
    {
      "x": 4.0,
      "y": 203.0
    },
    {
      "x": 2.0,
      "y": 146.0
    },
    {
      "x": 8.0,
      "y": 216.0
    },
    {
      "x": 4.0,
      "y": 81.0
    },
    {
      "x": 4.0,
      "y": 102.0
    },
    {
      "x": 16.0,
      "y": 317.0
    },
    {
      "x": 9.0,
      "y": 300.0
    },
    {
      "x": 4.0,
      "y": 133.0
    },
    {
      "x": 2.0,
      "y": 126.0
    },
    {
      "x": 2.0,
      "y": 218.0
    },
    {
      "x": 6.0,
      "y": 484.0
    },
    {
      "x": 16.0,
      "y": 322.0
    },
    {
      "x": 8.0,
      "y": 154.0
    },
    {
      "x": 6.0,
      "y": 181.0
    },
    {
      "x": 8.0,
      "y": 307.0
    },
    {
      "x": 2.0,
      "y": 119.0
    },
    {
      "x": 6.0,
      "y": 393.0
    },
    {
      "x": 6.0,
      "y": 263.0
    },
    {
      "x": 2.0,
      "y": 49.0
    },
    {
      "x": 11.0,
      "y": 146.0
    },
    {
      "x": 6.0,
      "y": 114.0
    },
    {
      "x": 10.0,
      "y": 276.0
    },
    {
      "x": 6.0,
      "y": 139.0
    },
    {
      "x": 6.0,
      "y": 154.0
    },
    {
      "x": 2.0,
      "y": 118.0
    },
    {
      "x": 6.0,
      "y": 189.0
    },
    {
      "x": 6.0,
      "y": 153.0
    },
    {
      "x": 4.0,
      "y": 164.0
    },
    {
      "x": 2.0,
      "y": 74.0
    },
    {
      "x": 4.0,
      "y": 137.0
    },
    {
      "x": 6.0,
      "y": 100.0
    },
    {
      "x": 4.0,
      "y": 108.0
    },
    {
      "x": 5.0,
      "y": 64.0
    },
    {
      "x": 2.0,
      "y": 99.0
    },
    {
      "x": 12.0,
      "y": 368.0
    },
    {
      "x": 5.0,
      "y": 143.0
    },
    {
      "x": 2.0,
      "y": 128.0
    },
    {
      "x": 3.0,
      "y": 70.0
    },
    {
      "x": 5.0,
      "y": 129.0
    },
    {
      "x": 6.0,
      "y": 87.0
    },
    {
      "x": 2.0,
      "y": 120.0
    },
    {
      "x": 4.0,
      "y": 116.0
    },
    {
      "x": 6.0,
      "y": 252.0
    },
    {
      "x": 6.0,
      "y": 210.0
    },
    {
      "x": 6.0,
      "y": 113.0
    },
    {
      "x": 8.0,
      "y": 290.0
    },
    {
      "x": 2.0,
      "y": 186.0
    },
    {
      "x": 6.0,
      "y": 295.0
    },
    {
      "x": 6.0,
      "y": 82.0
    },
    {
      "x": 8.0,
      "y": 153.0
    },
    {
      "x": 4.0,
      "y": 270.0
    },
    {
      "x": 6.0,
      "y": 119.0
    },
    {
      "x": 4.0,
      "y": 243.0
    },
    {
      "x": 2.0,
      "y": 75.0
    },
    {
      "x": 4.0,
      "y": 153.0
    },
    {
      "x": 6.0,
      "y": 305.0
    },
    {
      "x": 2.0,
      "y": 66.0
    },
    {
      "x": 2.0,
      "y": 93.0
    },
    {
      "x": 8.0,
      "y": 396.0
    },
    {
      "x": 2.0,
      "y": 121.0
    },
    {
      "x": 5.0,
      "y": 83.0
    },
    {
      "x": 4.0,
      "y": 110.0
    },
    {
      "x": 4.0,
      "y": 121.0
    },
    {
      "x": 14.0,
      "y": 222.0
    },
    {
      "x": 2.0,
      "y": 121.0
    },
    {
      "x": 2.0,
      "y": 120.0
    },
    {
      "x": 2.0,
      "y": 90.0
    },
    {
      "x": 4.0,
      "y": 140.0
    },
    {
      "x": 8.0,
      "y": 428.0
    },
    {
      "x": 4.0,
      "y": 118.0
    },
    {
      "x": 2.0,
      "y": 72.0
    },
    {
      "x": 4.0,
      "y": 265.0
    },
    {
      "x": 4.0,
      "y": 181.0
    },
    {
      "x": 4.0,
      "y": 105.0
    },
    {
      "x": 2.0,
      "y": 100.0
    },
    {
      "x": 3.0,
      "y": 107.0
    },
    {
      "x": 4.0,
      "y": 133.0
    },
    {
      "x": 2.0,
      "y": 251.0
    },
    {
      "x": 4.0,
      "y": 114.0
    },
    {
      "x": 6.0,
      "y": 312.0
    },
    {
      "x": 2.0,
      "y": 50.0
    },
    {
      "x": 2.0,
      "y": 88.0
    },
    {
      "x": 4.0,
      "y": 145.0
    },
    {
      "x": 9.0,
      "y": 190.0
    },
    {
      "x": 2.0,
      "y": 110.0
    },
    {
      "x": 16.0,
      "y": 423.0
    },
    {
      "x": 2.0,
      "y": 110.0
    },
    {
      "x": 5.0,
      "y": 259.0
    },
    {
      "x": 6.0,
      "y": 271.0
    },
    {
      "x": 3.0,
      "y": 90.0
    },
    {
      "x": 16.0,
      "y": 886.0
    },
    {
      "x": 4.0,
      "y": 119.0
    },
    {
      "x": 2.0,
      "y": 75.0
    },
    {
      "x": 16.0,
      "y": 588.0
    },
    {
      "x": 4.0,
      "y": 259.0
    },
    {
      "x": 2.0,
      "y": 56.0
    },
    {
      "x": 2.0,
      "y": 67.0
    },
    {
      "x": 5.0,
      "y": 127.0
    },
    {
      "x": 6.0,
      "y": 152.0
    },
    {
      "x": 3.0,
      "y": 105.0
    },
    {
      "x": 4.0,
      "y": 105.0
    },
    {
      "x": 4.0,
      "y": 79.0
    },
    {
      "x": 4.0,
      "y": 196.0
    },
    {
      "x": 6.0,
      "y": 150.0
    },
    {
      "x": 4.0,
      "y": 68.0
    },
    {
      "x": 7.0,
      "y": 113.0
    },
    {
      "x": 2.0,
      "y": 168.0
    },
    {
      "x": 4.0,
      "y": 173.0
    },
    {
      "x": 3.0,
      "y": 195.0
    },
    {
      "x": 4.0,
      "y": 103.0
    },
    {
      "x": 4.0,
      "y": 148.0
    },
    {
      "x": 6.0,
      "y": 464.0
    },
    {
      "x": 2.0,
      "y": 78.0
    },
    {
      "x": 4.0,
      "y": 88.0
    },
    {
      "x": 2.0,
      "y": 62.0
    },
    {
      "x": 4.0,
      "y": 140.0
    },
    {
      "x": 4.0,
      "y": 81.0
    },
    {
      "x": 2.0,
      "y": 55.0
    },
    {
      "x": 6.0,
      "y": 154.0
    },
    {
      "x": 8.0,
      "y": 210.0
    },
    {
      "x": 4.0,
      "y": 81.0
    },
    {
      "x": 4.0,
      "y": 126.0
    },
    {
      "x": 6.0,
      "y": 207.0
    },
    {
      "x": 2.0,
      "y": 60.0
    },
    {
      "x": 2.0,
      "y": 112.0
    },
    {
      "x": 4.0,
      "y": 130.0
    },
    {
      "x": 4.0,
      "y": 250.0
    },
    {
      "x": 3.0,
      "y": 65.0
    },
    {
      "x": 14.0,
      "y": 435.0
    },
    {
      "x": 2.0,
      "y": 129.0
    },
    {
      "x": 8.0,
      "y": 405.0
    },
    {
      "x": 10.0,
      "y": 205.0
    },
    {
      "x": 2.0,
      "y": 63.0
    },
    {
      "x": 2.0,
      "y": 139.0
    },
    {
      "x": 6.0,
      "y": 328.0
    },
    {
      "x": 6.0,
      "y": 124.0
    },
    {
      "x": 8.0,
      "y": 500.0
    },
    {
      "x": 3.0,
      "y": 70.0
    },
    {
      "x": 6.0,
      "y": 207.0
    },
    {
      "x": 9.0,
      "y": 250.0
    },
    {
      "x": 4.0,
      "y": 339.0
    },
    {
      "x": 4.0,
      "y": 84.0
    },
    {
      "x": 2.0,
      "y": 86.0
    },
    {
      "x": 4.0,
      "y": 103.0
    },
    {
      "x": 4.0,
      "y": 169.0
    },
    {
      "x": 6.0,
      "y": 231.0
    },
    {
      "x": 8.0,
      "y": 171.0
    },
    {
      "x": 2.0,
      "y": 113.0
    },
    {
      "x": 8.0,
      "y": 281.0
    },
    {
      "x": 4.0,
      "y": 123.0
    },
    {
      "x": 8.0,
      "y": 202.0
    },
    {
      "x": 3.0,
      "y": 180.0
    },
    {
      "x": 2.0,
      "y": 193.0
    },
    {
      "x": 3.0,
      "y": 91.0
    },
    {
      "x": 4.0,
      "y": 243.0
    },
    {
      "x": 4.0,
      "y": 176.0
    },
    {
      "x": 4.0,
      "y": 114.0
    },
    {
      "x": 6.0,
      "y": 186.0
    },
    {
      "x": 2.0,
      "y": 75.0
    },
    {
      "x": 2.0,
      "y": 285.0
    },
    {
      "x": 6.0,
      "y": 106.0
    },
    {
      "x": 4.0,
      "y": 113.0
    },
    {
      "x": 6.0,
      "y": 129.0
    },
    {
      "x": 13.0,
      "y": 295.0
    },
    {
      "x": 4.0,
      "y": 187.0
    },
    {
      "x": 2.0,
      "y": 49.0
    },
    {
      "x": 4.0,
      "y": 121.0
    },
    {
      "x": 2.0,
      "y": 75.0
    },
    {
      "x": 1.0,
      "y": 47.0
    },
    {
      "x": 15.0,
      "y": 506.0
    },
    {
      "x": 6.0,
      "y": 98.0
    }
  ],
  "locationByPrice": [
    {
      "longitude": -82.56957,
      "latitude": 35.45364,
      "price": 80.0
    },
    {
      "longitude": -82.65146,
      "latitude": 35.61617,
      "price": 287.0
    },
    {
      "longitude": -82.502045,
      "latitude": 35.450632,
      "price": 232.0
    },
    {
      "longitude": -82.664471,
      "latitude": 35.560872,
      "price": 121.0
    },
    {
      "longitude": -82.60438,
      "latitude": 35.58163,
      "price": 200.0
    },
    {
      "longitude": -82.55369,
      "latitude": 35.58638,
      "price": 205.0
    },
    {
      "longitude": -82.50265,
      "latitude": 35.49485,
      "price": 143.0
    },
    {
      "longitude": -82.55219,
      "latitude": 35.59524,
      "price": 297.0
    },
    {
      "longitude": -82.57677,
      "latitude": 35.58394,
      "price": 104.0
    },
    {
      "longitude": -82.51859,
      "latitude": 35.54523,
      "price": 203.0
    },
    {
      "longitude": -82.512747,
      "latitude": 35.532386,
      "price": 146.0
    },
    {
      "longitude": -82.51372,
      "latitude": 35.53233,
      "price": 216.0
    },
    {
      "longitude": -82.593061,
      "latitude": 35.56778,
      "price": 81.0
    },
    {
      "longitude": -82.65341,
      "latitude": 35.54877,
      "price": 102.0
    },
    {
      "longitude": -82.51684,
      "latitude": 35.62857,
      "price": 317.0
    },
    {
      "longitude": -82.53073,
      "latitude": 35.65001,
      "price": 300.0
    },
    {
      "longitude": -82.55476,
      "latitude": 35.60203,
      "price": 133.0
    },
    {
      "longitude": -82.47508,
      "latitude": 35.61509,
      "price": 126.0
    },
    {
      "longitude": -82.63932,
      "latitude": 35.59774,
      "price": 218.0
    },
    {
      "longitude": -82.56716,
      "latitude": 35.56808,
      "price": 484.0
    },
    {
      "longitude": -82.50265,
      "latitude": 35.49485,
      "price": 322.0
    },
    {
      "longitude": -82.4779,
      "latitude": 35.61769,
      "price": 154.0
    },
    {
      "longitude": -82.57403,
      "latitude": 35.6447,
      "price": 181.0
    },
    {
      "longitude": -82.52434,
      "latitude": 35.61738,
      "price": 307.0
    },
    {
      "longitude": -82.60926,
      "latitude": 35.56591,
      "price": 119.0
    },
    {
      "longitude": -82.541369,
      "latitude": 35.564568,
      "price": 393.0
    },
    {
      "longitude": -82.50887,
      "latitude": 35.54758,
      "price": 263.0
    },
    {
      "longitude": -82.59371,
      "latitude": 35.58204,
      "price": 49.0
    },
    {
      "longitude": -82.48453,
      "latitude": 35.55638,
      "price": 146.0
    },
    {
      "longitude": -82.47725,
      "latitude": 35.61151,
      "price": 114.0
    },
    {
      "longitude": -82.49294,
      "latitude": 35.47256,
      "price": 276.0
    },
    {
      "longitude": -82.574654,
      "latitude": 35.584759,
      "price": 139.0
    },
    {
      "longitude": -82.618017,
      "latitude": 35.647581,
      "price": 154.0
    },
    {
      "longitude": -82.48331,
      "latitude": 35.53665,
      "price": 118.0
    },
    {
      "longitude": -82.511535,
      "latitude": 35.53167,
      "price": 189.0
    },
    {
      "longitude": -82.49048,
      "latitude": 35.55363,
      "price": 153.0
    },
    {
      "longitude": -82.55329,
      "latitude": 35.59497,
      "price": 164.0
    },
    {
      "longitude": -82.54487,
      "latitude": 35.59613,
      "price": 74.0
    },
    {
      "longitude": -82.55853,
      "latitude": 35.63175,
      "price": 137.0
    },
    {
      "longitude": -82.53026,
      "latitude": 35.5659,
      "price": 100.0
    },
    {
      "longitude": -82.57599,
      "latitude": 35.58074,
      "price": 108.0
    },
    {
      "longitude": -82.60733,
      "latitude": 35.62316,
      "price": 64.0
    },
    {
      "longitude": -82.62917,
      "latitude": 35.63144,
      "price": 99.0
    },
    {
      "longitude": -82.60612,
      "latitude": 35.53499,
      "price": 368.0
    },
    {
      "longitude": -82.47244,
      "latitude": 35.60067,
      "price": 143.0
    },
    {
      "longitude": -82.53433,
      "latitude": 35.57491,
      "price": 128.0
    },
    {
      "longitude": -82.58984,
      "latitude": 35.57508,
      "price": 70.0
    },
    {
      "longitude": -82.62854,
      "latitude": 35.54841,
      "price": 129.0
    },
    {
      "longitude": -82.52087,
      "latitude": 35.47514,
      "price": 87.0
    },
    {
      "longitude": -82.558548,
      "latitude": 35.599442,
      "price": 120.0
    },
    {
      "longitude": -82.5911,
      "latitude": 35.58164,
      "price": 116.0
    },
    {
      "longitude": -82.55023,
      "latitude": 35.59204,
      "price": 252.0
    },
    {
      "longitude": -82.5324,
      "latitude": 35.60144,
      "price": 210.0
    },
    {
      "longitude": -82.624951,
      "latitude": 35.623399,
      "price": 113.0
    },
    {
      "longitude": -82.603,
      "latitude": 35.55804,
      "price": 290.0
    },
    {
      "longitude": -82.552547,
      "latitude": 35.59669,
      "price": 186.0
    },
    {
      "longitude": -82.542781,
      "latitude": 35.573309,
      "price": 295.0
    },
    {
      "longitude": -82.58242,
      "latitude": 35.46067,
      "price": 82.0
    },
    {
      "longitude": -82.61873,
      "latitude": 35.5111,
      "price": 153.0
    },
    {
      "longitude": -82.55268,
      "latitude": 35.59731,
      "price": 270.0
    },
    {
      "longitude": -82.59835,
      "latitude": 35.6295,
      "price": 119.0
    },
    {
      "longitude": -82.520971,
      "latitude": 35.614571,
      "price": 243.0
    },
    {
      "longitude": -82.61382,
      "latitude": 35.51006,
      "price": 75.0
    },
    {
      "longitude": -82.5161,
      "latitude": 35.47912,
      "price": 153.0
    },
    {
      "longitude": -82.55331,
      "latitude": 35.58739,
      "price": 305.0
    },
    {
      "longitude": -82.55249,
      "latitude": 35.61339,
      "price": 66.0
    },
    {
      "longitude": -82.55649,
      "latitude": 35.58574,
      "price": 93.0
    },
    {
      "longitude": -82.57474,
      "latitude": 35.64428,
      "price": 396.0
    },
    {
      "longitude": -82.483006,
      "latitude": 35.53848,
      "price": 121.0
    },
    {
      "longitude": -82.66063,
      "latitude": 35.64201,
      "price": 83.0
    },
    {
      "longitude": -82.46299,
      "latitude": 35.58512,
      "price": 110.0
    },
    {
      "longitude": -82.51095,
      "latitude": 35.64526,
      "price": 121.0
    },
    {
      "longitude": -82.46936,
      "latitude": 35.460426,
      "price": 222.0
    },
    {
      "longitude": -82.5521,
      "latitude": 35.6107,
      "price": 121.0
    },
    {
      "longitude": -82.55466,
      "latitude": 35.60158,
      "price": 120.0
    },
    {
      "longitude": -82.53114,
      "latitude": 35.56734,
      "price": 90.0
    },
    {
      "longitude": -82.553888,
      "latitude": 35.593512,
      "price": 140.0
    },
    {
      "longitude": -82.658324,
      "latitude": 35.632887,
      "price": 428.0
    },
    {
      "longitude": -82.571565,
      "latitude": 35.585128,
      "price": 118.0
    },
    {
      "longitude": -82.55816,
      "latitude": 35.59198,
      "price": 72.0
    },
    {
      "longitude": -82.57036,
      "latitude": 35.56825,
      "price": 265.0
    },
    {
      "longitude": -82.56054,
      "latitude": 35.59437,
      "price": 181.0
    },
    {
      "longitude": -82.57817,
      "latitude": 35.43627,
      "price": 105.0
    },
    {
      "longitude": -82.475524,
      "latitude": 35.621911,
      "price": 100.0
    },
    {
      "longitude": -82.576601,
      "latitude": 35.6316,
      "price": 107.0
    },
    {
      "longitude": -82.55741,
      "latitude": 35.59319,
      "price": 133.0
    },
    {
      "longitude": -82.5468,
      "latitude": 35.62179,
      "price": 251.0
    },
    {
      "longitude": -82.52078,
      "latitude": 35.55584,
      "price": 114.0
    },
    {
      "longitude": -82.567429,
      "latitude": 35.568116,
      "price": 312.0
    },
    {
      "longitude": -82.639351,
      "latitude": 35.549614,
      "price": 50.0
    },
    {
      "longitude": -82.665665,
      "latitude": 35.555345,
      "price": 88.0
    },
    {
      "longitude": -82.5528,
      "latitude": 35.61035,
      "price": 145.0
    },
    {
      "longitude": -82.65076,
      "latitude": 35.63852,
      "price": 190.0
    },
    {
      "longitude": -82.46299,
      "latitude": 35.58512,
      "price": 110.0
    },
    {
      "longitude": -82.47693,
      "latitude": 35.51554,
      "price": 423.0
    },
    {
      "longitude": -82.60978,
      "latitude": 35.63946,
      "price": 110.0
    },
    {
      "longitude": -82.552823,
      "latitude": 35.597262,
      "price": 259.0
    },
    {
      "longitude": -82.550574,
      "latitude": 35.587861,
      "price": 271.0
    },
    {
      "longitude": -82.562239,
      "latitude": 35.62594,
      "price": 90.0
    },
    {
      "longitude": -82.49859,
      "latitude": 35.517203,
      "price": 886.0
    },
    {
      "longitude": -82.6046,
      "latitude": 35.56932,
      "price": 119.0
    },
    {
      "longitude": -82.58796,
      "latitude": 35.6347,
      "price": 75.0
    },
    {
      "longitude": -82.625029,
      "latitude": 35.590072,
      "price": 588.0
    },
    {
      "longitude": -82.521383,
      "latitude": 35.45337,
      "price": 259.0
    },
    {
      "longitude": -82.604229,
      "latitude": 35.612679,
      "price": 56.0
    },
    {
      "longitude": -82.55617,
      "latitude": 35.60329,
      "price": 67.0
    },
    {
      "longitude": -82.57923,
      "latitude": 35.62672,
      "price": 127.0
    },
    {
      "longitude": -82.48432,
      "latitude": 35.49078,
      "price": 152.0
    },
    {
      "longitude": -82.61032,
      "latitude": 35.58297,
      "price": 105.0
    },
    {
      "longitude": -82.52845,
      "latitude": 35.62443,
      "price": 105.0
    },
    {
      "longitude": -82.56493,
      "latitude": 35.6074,
      "price": 79.0
    },
    {
      "longitude": -82.55499,
      "latitude": 35.60446,
      "price": 196.0
    },
    {
      "longitude": -82.553123,
      "latitude": 35.597935,
      "price": 150.0
    },
    {
      "longitude": -82.65352,
      "latitude": 35.56876,
      "price": 68.0
    },
    {
      "longitude": -82.64951,
      "latitude": 35.56285,
      "price": 113.0
    },
    {
      "longitude": -82.57101,
      "latitude": 35.49074,
      "price": 168.0
    },
    {
      "longitude": -82.53201,
      "latitude": 35.55333,
      "price": 173.0
    },
    {
      "longitude": -82.56999,
      "latitude": 35.60792,
      "price": 195.0
    },
    {
      "longitude": -82.608731,
      "latitude": 35.529002,
      "price": 103.0
    },
    {
      "longitude": -82.52967,
      "latitude": 35.53964,
      "price": 148.0
    },
    {
      "longitude": -82.551417,
      "latitude": 35.596389,
      "price": 464.0
    },
    {
      "longitude": -82.51269,
      "latitude": 35.58865,
      "price": 78.0
    },
    {
      "longitude": -82.58787,
      "latitude": 35.57979,
      "price": 88.0
    },
    {
      "longitude": -82.47095,
      "latitude": 35.62598,
      "price": 62.0
    },
    {
      "longitude": -82.61464,
      "latitude": 35.54731,
      "price": 140.0
    },
    {
      "longitude": -82.60026,
      "latitude": 35.51903,
      "price": 81.0
    },
    {
      "longitude": -82.53015,
      "latitude": 35.5686,
      "price": 55.0
    },
    {
      "longitude": -82.51949,
      "latitude": 35.64334,
      "price": 154.0
    },
    {
      "longitude": -82.50816,
      "latitude": 35.46801,
      "price": 210.0
    },
    {
      "longitude": -82.47673,
      "latitude": 35.62067,
      "price": 81.0
    },
    {
      "longitude": -82.51203,
      "latitude": 35.47424,
      "price": 126.0
    },
    {
      "longitude": -82.4813,
      "latitude": 35.63903,
      "price": 207.0
    },
    {
      "longitude": -82.529369,
      "latitude": 35.619944,
      "price": 60.0
    },
    {
      "longitude": -82.48701,
      "latitude": 35.60723,
      "price": 112.0
    },
    {
      "longitude": -82.486107,
      "latitude": 35.604691,
      "price": 130.0
    },
    {
      "longitude": -82.55115,
      "latitude": 35.58888,
      "price": 250.0
    },
    {
      "longitude": -82.57512,
      "latitude": 35.46403,
      "price": 65.0
    },
    {
      "longitude": -82.585502,
      "latitude": 35.596593,
      "price": 435.0
    },
    {
      "longitude": -82.480749,
      "latitude": 35.548602,
      "price": 129.0
    },
    {
      "longitude": -82.58728,
      "latitude": 35.48504,
      "price": 405.0
    },
    {
      "longitude": -82.58159,
      "latitude": 35.62748,
      "price": 205.0
    },
    {
      "longitude": -82.500591,
      "latitude": 35.582903,
      "price": 63.0
    },
    {
      "longitude": -82.58636,
      "latitude": 35.63072,
      "price": 139.0
    },
    {
      "longitude": -82.49715,
      "latitude": 35.64781,
      "price": 328.0
    },
    {
      "longitude": -82.62779,
      "latitude": 35.55215,
      "price": 124.0
    },
    {
      "longitude": -82.556114,
      "latitude": 35.597855,
      "price": 500.0
    },
    {
      "longitude": -82.48439,
      "latitude": 35.62654,
      "price": 70.0
    },
    {
      "longitude": -82.51668,
      "latitude": 35.55224,
      "price": 207.0
    },
    {
      "longitude": -82.56102,
      "latitude": 35.60084,
      "price": 250.0
    },
    {
      "longitude": -82.55078,
      "latitude": 35.63115,
      "price": 339.0
    },
    {
      "longitude": -82.526239,
      "latitude": 35.499395,
      "price": 84.0
    },
    {
      "longitude": -82.54957,
      "latitude": 35.6354,
      "price": 86.0
    },
    {
      "longitude": -82.578948,
      "latitude": 35.586384,
      "price": 103.0
    },
    {
      "longitude": -82.46836,
      "latitude": 35.60493,
      "price": 169.0
    },
    {
      "longitude": -82.50987,
      "latitude": 35.49695,
      "price": 231.0
    },
    {
      "longitude": -82.61856,
      "latitude": 35.51002,
      "price": 171.0
    },
    {
      "longitude": -82.50478,
      "latitude": 35.43052,
      "price": 113.0
    },
    {
      "longitude": -82.50535,
      "latitude": 35.42839,
      "price": 281.0
    },
    {
      "longitude": -82.47513,
      "latitude": 35.59992,
      "price": 123.0
    },
    {
      "longitude": -82.573983,
      "latitude": 35.64173,
      "price": 202.0
    },
    {
      "longitude": -82.54291,
      "latitude": 35.605704,
      "price": 180.0
    },
    {
      "longitude": -82.57114,
      "latitude": 35.49223,
      "price": 193.0
    },
    {
      "longitude": -82.61317,
      "latitude": 35.53924,
      "price": 91.0
    },
    {
      "longitude": -82.61652,
      "latitude": 35.61224,
      "price": 243.0
    },
    {
      "longitude": -82.636397,
      "latitude": 35.596064,
      "price": 176.0
    },
    {
      "longitude": -82.52302,
      "latitude": 35.5635,
      "price": 114.0
    },
    {
      "longitude": -82.62037,
      "latitude": 35.55459,
      "price": 186.0
    },
    {
      "longitude": -82.59628,
      "latitude": 35.65066,
      "price": 75.0
    },
    {
      "longitude": -82.52228,
      "latitude": 35.62542,
      "price": 285.0
    },
    {
      "longitude": -82.52503,
      "latitude": 35.43092,
      "price": 106.0
    },
    {
      "longitude": -82.54201,
      "latitude": 35.4602,
      "price": 113.0
    },
    {
      "longitude": -82.568689,
      "latitude": 35.467435,
      "price": 129.0
    },
    {
      "longitude": -82.48863,
      "latitude": 35.52549,
      "price": 295.0
    },
    {
      "longitude": -82.53508,
      "latitude": 35.59116,
      "price": 187.0
    },
    {
      "longitude": -82.61213,
      "latitude": 35.60272,
      "price": 49.0
    },
    {
      "longitude": -82.579873,
      "latitude": 35.653768,
      "price": 121.0
    },
    {
      "longitude": -82.50707,
      "latitude": 35.56098,
      "price": 75.0
    },
    {
      "longitude": -82.59114,
      "latitude": 35.5718,
      "price": 47.0
    },
    {
      "longitude": -82.599991,
      "latitude": 35.5093,
      "price": 506.0
    },
    {
      "longitude": -82.50997,
      "latitude": 35.463223,
      "price": 98.0
    },
    {
      "longitude": -82.596247,
      "latitude": 35.602258,
      "price": 280.0
    },
    {
      "longitude": -82.65041,
      "latitude": 35.54898,
      "price": 122.0
    },
    {
      "longitude": -82.64958,
      "latitude": 35.61891,
      "price": 257.0
    },
    {
      "longitude": -82.6693,
      "latitude": 35.55045,
      "price": 170.0
    },
    {
      "longitude": -82.556388,
      "latitude": 35.602824,
      "price": 451.0
    },
    {
      "longitude": -82.51478,
      "latitude": 35.53258,
      "price": 50.0
    },
    {
      "longitude": -82.57481,
      "latitude": 35.57568,
      "price": 270.0
    },
    {
      "longitude": -82.524635,
      "latitude": 35.566494,
      "price": 153.0
    },
    {
      "longitude": -82.54855,
      "latitude": 35.57889,
      "price": 55.0
    },
    {
      "longitude": -82.59693,
      "latitude": 35.51643,
      "price": 129.0
    },
    {
      "longitude": -82.52323,
      "latitude": 35.61048,
      "price": 93.0
    },
    {
      "longitude": -82.656952,
      "latitude": 35.59481,
      "price": 102.0
    },
    {
      "longitude": -82.59962,
      "latitude": 35.52033,
      "price": 77.0
    },
    {
      "longitude": -82.50085,
      "latitude": 35.46964,
      "price": 82.0
    },
    {
      "longitude": -82.57623,
      "latitude": 35.62736,
      "price": 75.0
    },
    {
      "longitude": -82.50997,
      "latitude": 35.58809,
      "price": 95.0
    },
    {
      "longitude": -82.50322,
      "latitude": 35.47496,
      "price": 168.0
    },
    {
      "longitude": -82.467987,
      "latitude": 35.484298,
      "price": 79.0
    },
    {
      "longitude": -82.512347,
      "latitude": 35.491482,
      "price": 166.0
    },
    {
      "longitude": -82.557777,
      "latitude": 35.61179,
      "price": 223.0
    },
    {
      "longitude": -82.60585,
      "latitude": 35.58148,
      "price": 56.0
    },
    {
      "longitude": -82.506022,
      "latitude": 35.475119,
      "price": 119.0
    },
    {
      "longitude": -82.668193,
      "latitude": 35.564064,
      "price": 343.0
    },
    {
      "longitude": -82.6104,
      "latitude": 35.65058,
      "price": 152.0
    },
    {
      "longitude": -82.46245,
      "latitude": 35.46654,
      "price": 200.0
    },
    {
      "longitude": -82.63901,
      "latitude": 35.57558,
      "price": 168.0
    },
    {
      "longitude": -82.5279,
      "latitude": 35.6112,
      "price": 465.0
    },
    {
      "longitude": -82.51426,
      "latitude": 35.55275,
      "price": 197.0
    },
    {
      "longitude": -82.575843,
      "latitude": 35.576117,
      "price": 60.0
    },
    {
      "longitude": -82.52951,
      "latitude": 35.56903,
      "price": 93.0
    },
    {
      "longitude": -82.56929,
      "latitude": 35.5764,
      "price": 54.0
    },
    {
      "longitude": -82.611465,
      "latitude": 35.604618,
      "price": 157.0
    },
    {
      "longitude": -82.5262,
      "latitude": 35.5691,
      "price": 41.0
    },
    {
      "longitude": -82.58739,
      "latitude": 35.63511,
      "price": 100.0
    },
    {
      "longitude": -82.56972,
      "latitude": 35.58792,
      "price": 134.0
    },
    {
      "longitude": -82.556625,
      "latitude": 35.595646,
      "price": 200.0
    },
    {
      "longitude": -82.60325,
      "latitude": 35.61205,
      "price": 28.0
    },
    {
      "longitude": -82.59988,
      "latitude": 35.58866,
      "price": 175.0
    },
    {
      "longitude": -82.56665,
      "latitude": 35.48027,
      "price": 141.0
    },
    {
      "longitude": -82.55713,
      "latitude": 35.59319,
      "price": 317.0
    }
  ],
  "featureImportance": [
    {
      "feature": "bathrooms",
      "importance": 0.290256
    },
    {
      "feature": "accommodates",
      "importance": 0.250941
    },
    {
      "feature": "longitude",
      "importance": 0.163839
    },
    {
      "feature": "neighbourhood_cleansed",
      "importance": 0.148616
    },
    {
      "feature": "bedrooms",
      "importance": 0.114612
    },
    {
      "feature": "amenities_count",
      "importance": 0.06774
    },
    {
      "feature": "latitude",
      "importance": 0.067133
    },
    {
      "feature": "review_scores_value",
      "importance": 0.046836
    },
    {
      "feature": "room_type",
      "importance": 0.04399
    },
    {
      "feature": "review_scores_rating",
      "importance": 0.0403
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
