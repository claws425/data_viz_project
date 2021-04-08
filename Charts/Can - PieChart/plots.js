 // Part 5 - Working Pie Chart
var trace1 = {
  labels: ["Washtenaw", "Bay", "Calhoun", "Kalamazoo", "Lenawee", "Kent", "Oakland", "Wayne",
  "Ingham", "Jackson", "Genesee", "Muskegon", "Lapeer", "Marquette", "Van Buren", 
  "Berrien", "Chippewa", "Kalkaska", "Mecosta", "Newaygo", "Crawford", "Emmet", 
  "Hillsdale", "Iosco", "Iron", "Manistee", "Ottawa", "Saginaw", "Tuscola", "Allegan", 
  "Barry", "Benzie", "Cass", "Clinton", "Delta", "Dickinson", "Houghton", "Lake", 
  "Monroe", "Montcalm", "Osceola", "Presque Isle", "Shiawassee"],
  values: [22, 14, 11, 11, 11, 10, 10, 9, 8, 8, 7, 7, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  type: 'pie'
};

var data = [trace1];

var layout = {
  title: "Distribution of Cannabis Stores By Michigan Counties",
};

Plotly.newPlot("plot", data, layout);

