import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Exoplanet } from '../models/exoplanet';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaExoplanetsService {

  queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_masse,sy_dist,releasedate+from+ps+order+by+pl_name+asc,releasedate+desc&format=json'; //Todos os planetas


  exoplanetsArray: Exoplanet[] = [{
    "pl_name": "Kepler-11 c",
    "hostname": "Kepler-11",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 13.02502000,
    "pl_masse": 13.50000,
    "sy_dist": 646.3460000,
    "releasedate": "2014-05-16"
},
{
    "pl_name": "Kepler-11 f",
    "hostname": "Kepler-11",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 46.68876000,
    "pl_masse": 2.30000,
    "sy_dist": 646.3460000,
    "releasedate": "2014-05-16"
},
{
    "pl_name": "OGLE-TR-10 b",
    "hostname": "OGLE-TR-10",
    "discoverymethod": "Transit",
    "disc_year": 2004,
    "pl_orbper": 3.10127800,
    "pl_masse": 197.04600,
    "sy_dist": 1344.9700000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 210702 b",
    "hostname": "HD 210702",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2007,
    "pl_orbper": 354.29000000,
    "pl_masse": null,
    "sy_dist": 54.1963000,
    "releasedate": "2015-09-03"
},
{
    "pl_name": "BD-08 2823 b",
    "hostname": "BD-08 2823",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 5.60000000,
    "pl_masse": null,
    "sy_dist": 41.3342000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "BD-08 2823 c",
    "hostname": "BD-08 2823",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 237.60000000,
    "pl_masse": null,
    "sy_dist": 41.3342000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HR 8799 c",
    "hostname": "HR 8799",
    "discoverymethod": "Imaging",
    "disc_year": 2008,
    "pl_orbper": 69000.00000000,
    "pl_masse": 3000.00000,
    "sy_dist": 41.2441000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 110014 b",
    "hostname": "HD 110014",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 835.47700000,
    "pl_masse": null,
    "sy_dist": 100.7580000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-33 d",
    "hostname": "Kepler-33",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 21.77575400,
    "pl_masse": null,
    "sy_dist": 1209.1600000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "HIP 5158 b",
    "hostname": "HIP 5158",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 345.72000000,
    "pl_masse": null,
    "sy_dist": 51.6026000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 44219 b",
    "hostname": "HD 44219",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2010,
    "pl_orbper": 472.30000000,
    "pl_masse": null,
    "sy_dist": 52.9051000,
    "releasedate": "2015-01-22"
},
{
    "pl_name": "HD 6718 b",
    "hostname": "HD 6718",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 2496.00000000,
    "pl_masse": null,
    "sy_dist": 51.3444000,
    "releasedate": "2015-03-26"
},
{
    "pl_name": "HD 156846 b",
    "hostname": "HD 156846",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2007,
    "pl_orbper": 359.55460000,
    "pl_masse": null,
    "sy_dist": 47.7332000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 132563 b",
    "hostname": "HD 132563",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 1544.00000000,
    "pl_masse": null,
    "sy_dist": 105.1550000,
    "releasedate": "2019-01-31"
},
{
    "pl_name": "HD 137388 b",
    "hostname": "HD 137388",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 330.00000000,
    "pl_masse": null,
    "sy_dist": 40.4841000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 85512 b",
    "hostname": "HD 85512",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 58.43000000,
    "pl_masse": null,
    "sy_dist": 11.2810000,
    "releasedate": "2015-04-16"
},
{
    "pl_name": "HD 23127 b",
    "hostname": "HD 23127",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2006,
    "pl_orbper": 1214.00000000,
    "pl_masse": null,
    "sy_dist": 93.8555000,
    "releasedate": "2014-11-19"
},
{
    "pl_name": "HD 100655 b",
    "hostname": "HD 100655",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 157.57000000,
    "pl_masse": null,
    "sy_dist": 137.1780000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-24 c",
    "hostname": "Kepler-24",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 12.33350000,
    "pl_masse": 508.50000,
    "sy_dist": 1156.8100000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "GJ 667 C b",
    "hostname": "GJ 667 C",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 7.20066000,
    "pl_masse": null,
    "sy_dist": 7.2439600,
    "releasedate": "2014-05-16"
},
{
    "pl_name": "HD 155358 b",
    "hostname": "HD 155358",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2007,
    "pl_orbper": 194.30000000,
    "pl_masse": null,
    "sy_dist": 43.6197000,
    "releasedate": "2019-01-31"
},
{
    "pl_name": "HD 79498 b",
    "hostname": "HD 79498",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 1966.10000000,
    "pl_masse": null,
    "sy_dist": 48.9489000,
    "releasedate": "2019-01-31"
},
{
    "pl_name": "CHXR 73 b",
    "hostname": "CHXR 73",
    "discoverymethod": "Imaging",
    "disc_year": 2006,
    "pl_orbper": null,
    "pl_masse": 3994.48600,
    "sy_dist": 190.3740000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 13189 b",
    "hostname": "HD 13189",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2005,
    "pl_orbper": 471.60000000,
    "pl_masse": null,
    "sy_dist": 497.8230000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "GJ 433 b",
    "hostname": "GJ 433",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 7.37090000,
    "pl_masse": null,
    "sy_dist": 9.0645600,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HIP 5158 b",
    "hostname": "HIP 5158",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 345.63000000,
    "pl_masse": null,
    "sy_dist": 51.6026000,
    "releasedate": "2015-09-10"
},
{
    "pl_name": "alf Ari b",
    "hostname": "alf Ari",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2010,
    "pl_orbper": 380.80000000,
    "pl_masse": null,
    "sy_dist": 20.2101900,
    "releasedate": "2019-01-31"
},
{
    "pl_name": "Kepler-32 b",
    "hostname": "Kepler-32",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 5.90124000,
    "pl_masse": 1303.00000,
    "sy_dist": 323.8470000,
    "releasedate": "2016-03-24"
},
{
    "pl_name": "tau Gem b",
    "hostname": "tau Gem",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 305.00000000,
    "pl_masse": null,
    "sy_dist": 112.5370000,
    "releasedate": "2014-05-16"
},
{
    "pl_name": "HD 62509 b",
    "hostname": "HD 62509",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2006,
    "pl_orbper": 589.70000000,
    "pl_masse": null,
    "sy_dist": null,
    "releasedate": "2015-03-26"
},
{
    "pl_name": "Kepler-370 c",
    "hostname": "Kepler-370",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 19.02293000,
    "pl_masse": null,
    "sy_dist": 1167.9400000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-400 b",
    "hostname": "Kepler-400",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 9.02438900,
    "pl_masse": null,
    "sy_dist": 845.9700000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-221 b",
    "hostname": "Kepler-221",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.79590600,
    "pl_masse": null,
    "sy_dist": 385.2310000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-367 c",
    "hostname": "Kepler-367",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 53.57863700,
    "pl_masse": null,
    "sy_dist": 188.0270000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-393 c",
    "hostname": "Kepler-393",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 14.61361200,
    "pl_masse": null,
    "sy_dist": 881.4040000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-304 c",
    "hostname": "Kepler-304",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.31594600,
    "pl_masse": null,
    "sy_dist": 434.6840000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-360 b",
    "hostname": "Kepler-360",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 3.28967200,
    "pl_masse": null,
    "sy_dist": 876.0440000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-101 c",
    "hostname": "Kepler-101",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 6.02980900,
    "pl_masse": null,
    "sy_dist": 927.9810000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-243 c",
    "hostname": "Kepler-243",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 20.02621800,
    "pl_masse": null,
    "sy_dist": 693.8600000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-261 c",
    "hostname": "Kepler-261",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 24.57085800,
    "pl_masse": null,
    "sy_dist": 317.4990000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-327 d",
    "hostname": "Kepler-327",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 13.96945700,
    "pl_masse": null,
    "sy_dist": 241.9870000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-136 b",
    "hostname": "Kepler-136",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 11.57890000,
    "pl_masse": null,
    "sy_dist": 420.8180000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-122 d",
    "hostname": "Kepler-122",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 21.58747500,
    "pl_masse": null,
    "sy_dist": 1027.4500000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-157 c",
    "hostname": "Kepler-157",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 13.54050000,
    "pl_masse": null,
    "sy_dist": 773.7130000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-147 c",
    "hostname": "Kepler-147",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 33.41642300,
    "pl_masse": null,
    "sy_dist": 1042.0200000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-239 b",
    "hostname": "Kepler-239",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 11.76305100,
    "pl_masse": null,
    "sy_dist": 648.1090000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-200 b",
    "hostname": "Kepler-200",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 8.59480500,
    "pl_masse": null,
    "sy_dist": 665.9120000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-243 b",
    "hostname": "Kepler-243",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.71544200,
    "pl_masse": null,
    "sy_dist": 693.8600000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-160 c",
    "hostname": "Kepler-160",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 13.69908700,
    "pl_masse": null,
    "sy_dist": 937.0130000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-254 b",
    "hostname": "Kepler-254",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.82666200,
    "pl_masse": null,
    "sy_dist": 1389.4800000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-172 c",
    "hostname": "Kepler-172",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 6.38899600,
    "pl_masse": null,
    "sy_dist": 828.5920000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-299 c",
    "hostname": "Kepler-299",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 6.88587500,
    "pl_masse": null,
    "sy_dist": 1052.2400000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-278 c",
    "hostname": "Kepler-278",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 51.07877500,
    "pl_masse": null,
    "sy_dist": 443.0300000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-339 d",
    "hostname": "Kepler-339",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 10.55834500,
    "pl_masse": null,
    "sy_dist": 616.6370000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-397 b",
    "hostname": "Kepler-397",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 22.25094900,
    "pl_masse": null,
    "sy_dist": null,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-399 b",
    "hostname": "Kepler-399",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 14.42528100,
    "pl_masse": null,
    "sy_dist": 740.5370000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 219415 b",
    "hostname": "HD 219415",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 2093.30000000,
    "pl_masse": null,
    "sy_dist": 165.1840000,
    "releasedate": "2015-09-18"
},
{
    "pl_name": "Pr0201 b",
    "hostname": "Pr0201",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 4.42640000,
    "pl_masse": null,
    "sy_dist": 180.6400000,
    "releasedate": "2015-09-10"
},
{
    "pl_name": "eps Tau b",
    "hostname": "eps Tau",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2006,
    "pl_orbper": 594.90000000,
    "pl_masse": null,
    "sy_dist": 47.5285200,
    "releasedate": "2019-01-31"
},
{
    "pl_name": "HD 207832 b",
    "hostname": "HD 207832",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 161.97000000,
    "pl_masse": null,
    "sy_dist": 58.9291000,
    "releasedate": "2015-09-10"
},
{
    "pl_name": "HD 207832 c",
    "hostname": "HD 207832",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 1155.70000000,
    "pl_masse": null,
    "sy_dist": 58.9291000,
    "releasedate": "2015-09-10"
},
{
    "pl_name": "nu Oph c",
    "hostname": "nu Oph",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 3186.00000000,
    "pl_masse": null,
    "sy_dist": 46.2107000,
    "releasedate": "2015-09-03"
},
{
    "pl_name": "HD 5608 b",
    "hostname": "HD 5608",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 792.60000000,
    "pl_masse": null,
    "sy_dist": 58.1105000,
    "releasedate": "2015-09-03"
},
{
    "pl_name": "WASP-176 b",
    "hostname": "WASP-176",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 3.89905200,
    "pl_masse": 271.74465,
    "sy_dist": 568.4200000,
    "releasedate": "2020-05-21"
},
{
    "pl_name": "WASP-16 b",
    "hostname": "WASP-16",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.11860680,
    "pl_masse": 264.43456,
    "sy_dist": 194.1340000,
    "releasedate": "2016-09-08"
},
{
    "pl_name": "KELT-8 b",
    "hostname": "KELT-8",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.24407960,
    "pl_masse": null,
    "sy_dist": 197.5720000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "XO-6 b",
    "hostname": "XO-6",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.76500070,
    "pl_masse": 1398.45200,
    "sy_dist": 235.4790000,
    "releasedate": "2016-12-21"
},
{
    "pl_name": "XO-1 b",
    "hostname": "XO-1",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 3.94150500,
    "pl_masse": null,
    "sy_dist": 163.5530000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-19 b",
    "hostname": "WASP-19",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 268.3250000,
    "releasedate": "2015-10-29"
},
{
    "pl_name": "HD 159868 b",
    "hostname": "HD 159868",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2006,
    "pl_orbper": 1178.40000000,
    "pl_masse": null,
    "sy_dist": 55.8503000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HATS-4 b",
    "hostname": "HATS-4",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.51672572,
    "pl_masse": null,
    "sy_dist": 416.4590000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-167 b",
    "hostname": "WASP-167",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.02189784,
    "pl_masse": null,
    "sy_dist": 423.5520000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-78 b",
    "hostname": "WASP-78",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.17518000,
    "pl_masse": 352.79130,
    "sy_dist": 754.2580000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "HAT-P-12 b",
    "hostname": "HAT-P-12",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.21305929,
    "pl_masse": 66.23577,
    "sy_dist": 142.7510000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-12 b",
    "hostname": "HAT-P-12",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.21305751,
    "pl_masse": null,
    "sy_dist": 142.7510000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HAT-P-27 b",
    "hostname": "HAT-P-27",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.03958020,
    "pl_masse": null,
    "sy_dist": 199.1730000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-33 b",
    "hostname": "HAT-P-33",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": null,
    "pl_masse": 206.58950,
    "sy_dist": 396.1100000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "WASP-50 b",
    "hostname": "WASP-50",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.95510000,
    "pl_masse": 524.41950,
    "sy_dist": 184.8480000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "XO-3 b",
    "hostname": "XO-3",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": null,
    "pl_masse": 3861.63450,
    "sy_dist": 213.0530000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "HAT-P-56 b",
    "hostname": "HAT-P-56",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 2.79083300,
    "pl_masse": null,
    "sy_dist": 320.6390000,
    "releasedate": "2016-05-19"
},
{
    "pl_name": "7 CMa b",
    "hostname": "7 CMa",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 763.00000000,
    "pl_masse": null,
    "sy_dist": 19.8101000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-15 b",
    "hostname": "WASP-15",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.75209980,
    "pl_masse": null,
    "sy_dist": 282.0910000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HAT-P-25 b",
    "hostname": "HAT-P-25",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.65281514,
    "pl_masse": 180.84527,
    "sy_dist": 300.3840000,
    "releasedate": "2019-01-17"
},
{
    "pl_name": "WASP-25 b",
    "hostname": "WASP-25",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.76483312,
    "pl_masse": null,
    "sy_dist": 211.4160000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-144 b",
    "hostname": "WASP-144",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 2.27831530,
    "pl_masse": null,
    "sy_dist": 355.5130000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HATS-55 b",
    "hostname": "HATS-55",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 4.20420010,
    "pl_masse": null,
    "sy_dist": 609.8380000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "K2-148 b",
    "hostname": "K2-148",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 4.38395000,
    "pl_masse": null,
    "sy_dist": 124.4580000,
    "releasedate": "2018-02-01"
},
{
    "pl_name": "WASP-75 b",
    "hostname": "WASP-75",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 2.48419870,
    "pl_masse": null,
    "sy_dist": 294.0010000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-2 b",
    "hostname": "WASP-2",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.15216302,
    "pl_masse": null,
    "sy_dist": 153.2420000,
    "releasedate": "2022-10-03"
},
{
    "pl_name": "KOI-12 b",
    "hostname": "KOI-12",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 17.85521970,
    "pl_masse": null,
    "sy_dist": 399.3980000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "HATS-41 b",
    "hostname": "HATS-41",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 4.19364900,
    "pl_masse": null,
    "sy_dist": 737.6680000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "Kepler-12 b",
    "hostname": "Kepler-12",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 4.43796370,
    "pl_masse": 137.62039,
    "sy_dist": 881.3860000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-67 b",
    "hostname": "HAT-P-67",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 4.81015070,
    "pl_masse": null,
    "sy_dist": 371.6860000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "Kepler-731 b",
    "hostname": "Kepler-731",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.85560355,
    "pl_masse": null,
    "sy_dist": 1257.1600000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "HAT-P-54 b",
    "hostname": "HAT-P-54",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.79984700,
    "pl_masse": 578.45060,
    "sy_dist": 143.6510000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-101 b",
    "hostname": "WASP-101",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 3.58572200,
    "pl_masse": 157.96151,
    "sy_dist": 201.2240000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-82 b",
    "hostname": "WASP-82",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 2.70579000,
    "pl_masse": 371.86110,
    "sy_dist": 275.6640000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "HAT-P-56 b",
    "hostname": "HAT-P-56",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 2.79086200,
    "pl_masse": null,
    "sy_dist": 320.6390000,
    "releasedate": "2019-09-05"
},
{
    "pl_name": "55 Cnc d",
    "hostname": "55 Cnc",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2002,
    "pl_orbper": 4867.00000000,
    "pl_masse": 1226.77000,
    "sy_dist": 12.5855000,
    "releasedate": "2014-08-21"
},
{
    "pl_name": "KELT-11 b",
    "hostname": "KELT-11",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 4.73620495,
    "pl_masse": null,
    "sy_dist": 99.1596000,
    "releasedate": "2020-12-03"
},
{
    "pl_name": "KELT-6 b",
    "hostname": "KELT-6",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.84570000,
    "pl_masse": 136.66100,
    "sy_dist": 240.7260000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-37 b",
    "hostname": "HAT-P-37",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.79743600,
    "pl_masse": 371.52800,
    "sy_dist": 390.5940000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-36 b",
    "hostname": "HAT-P-36",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.32734680,
    "pl_masse": null,
    "sy_dist": 294.4190000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-8 b",
    "hostname": "WASP-8",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 8.15871500,
    "pl_masse": 677.61356,
    "sy_dist": 89.9606000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Kepler-731 b",
    "hostname": "Kepler-731",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.85560240,
    "pl_masse": null,
    "sy_dist": 1257.1600000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "WASP-12 b",
    "hostname": "WASP-12",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 427.2460000,
    "releasedate": "2019-12-05"
},
{
    "pl_name": "WASP-18 b",
    "hostname": "WASP-18",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 0.94145181,
    "pl_masse": 3299.07540,
    "sy_dist": 123.4830000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-14 b",
    "hostname": "WASP-14",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 2.24384710,
    "pl_masse": null,
    "sy_dist": 161.9970000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "TrES-2 b",
    "hostname": "TrES-2",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 2.47061323,
    "pl_masse": 383.30298,
    "sy_dist": 215.3200000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "XO-1 b",
    "hostname": "XO-1",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 3.94150685,
    "pl_masse": 292.39100,
    "sy_dist": 163.5530000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-118 b",
    "hostname": "WASP-118",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 4.04606565,
    "pl_masse": null,
    "sy_dist": 376.6580000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "WASP-77 A b",
    "hostname": "WASP-77 A",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 1.36002869,
    "pl_masse": null,
    "sy_dist": 105.1660000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "KELT-17 b",
    "hostname": "KELT-17",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.08017350,
    "pl_masse": null,
    "sy_dist": 226.5000000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HD 106515 A b",
    "hostname": "HD 106515 A",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 3630.00000000,
    "pl_masse": null,
    "sy_dist": 34.0915000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "K2-148 c",
    "hostname": "K2-148",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 6.92260000,
    "pl_masse": null,
    "sy_dist": 124.4580000,
    "releasedate": "2018-02-01"
},
{
    "pl_name": "WASP-39 b",
    "hostname": "WASP-39",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 4.05527650,
    "pl_masse": 89.94589,
    "sy_dist": 213.9820000,
    "releasedate": "2016-04-28"
},
{
    "pl_name": "WASP-172 b",
    "hostname": "WASP-172",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 5.47743270,
    "pl_masse": null,
    "sy_dist": 538.1100000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-5 b",
    "hostname": "HAT-P-5",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.78849100,
    "pl_masse": null,
    "sy_dist": 303.3360000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "eps CrB b",
    "hostname": "eps CrB",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 417.90000000,
    "pl_masse": null,
    "sy_dist": 69.8683000,
    "releasedate": "2015-09-10"
},
{
    "pl_name": "HD 4732 b",
    "hostname": "HD 4732",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 360.20000000,
    "pl_masse": null,
    "sy_dist": 54.7841000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 37605 c",
    "hostname": "HD 37605",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 2720.00000000,
    "pl_masse": null,
    "sy_dist": 46.7864000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 40307 b",
    "hostname": "HD 40307",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 4.31230000,
    "pl_masse": null,
    "sy_dist": 12.9363000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 40307 d",
    "hostname": "HD 40307",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 20.43200000,
    "pl_masse": null,
    "sy_dist": 12.9363000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 40307 g",
    "hostname": "HD 40307",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 197.80000000,
    "pl_masse": null,
    "sy_dist": 12.9363000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-42 b",
    "hostname": "HAT-P-42",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.64184990,
    "pl_masse": null,
    "sy_dist": 405.2380000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-11 b",
    "hostname": "WASP-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 3.72247470,
    "pl_masse": 154.77700,
    "sy_dist": 124.7300000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "OGLE-2019-BLG-1470L AB c",
    "hostname": "OGLE-2019-BLG-1470L A",
    "discoverymethod": "Microlensing",
    "disc_year": 2022,
    "pl_orbper": null,
    "pl_masse": 699.22250,
    "sy_dist": 5900.0000000,
    "releasedate": "2022-09-19"
},
{
    "pl_name": "XO-1 b",
    "hostname": "XO-1",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 3.94151280,
    "pl_masse": null,
    "sy_dist": 163.5530000,
    "releasedate": "2016-09-08"
},
{
    "pl_name": "HAT-P-44 b",
    "hostname": "HAT-P-44",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.30118860,
    "pl_masse": null,
    "sy_dist": 347.8500000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "CoRoT-1 b",
    "hostname": "CoRoT-1",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.50895570,
    "pl_masse": 359.14790,
    "sy_dist": 787.9090000,
    "releasedate": "2019-10-24"
},
{
    "pl_name": "WASP-99 b",
    "hostname": "WASP-99",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.75251000,
    "pl_masse": 883.53000,
    "sy_dist": 158.6600000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "KPS-1 b",
    "hostname": "KPS-1",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 1.70629100,
    "pl_masse": 346.43470,
    "sy_dist": 262.7060000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "WASP-16 b",
    "hostname": "WASP-16",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": null,
    "pl_masse": 268.88418,
    "sy_dist": 194.1340000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "Kepler-718 b",
    "hostname": "Kepler-718",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.05234990,
    "pl_masse": null,
    "sy_dist": 1302.3300000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "WASP-96 b",
    "hostname": "WASP-96",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 3.42526020,
    "pl_masse": 155.73670,
    "sy_dist": 352.4640000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HD 209458 b",
    "hostname": "HD 209458",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1999,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 48.3016000,
    "releasedate": "2016-10-13"
},
{
    "pl_name": "KELT-23 A b",
    "hostname": "KELT-23 A",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 2.25528739,
    "pl_masse": null,
    "sy_dist": 126.2610000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HD 209458 b",
    "hostname": "HD 209458",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1999,
    "pl_orbper": 3.52476000,
    "pl_masse": null,
    "sy_dist": 48.3016000,
    "releasedate": "2022-05-09"
},
{
    "pl_name": "WASP-21 b",
    "hostname": "WASP-21",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.32250380,
    "pl_masse": null,
    "sy_dist": 258.4260000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HAT-P-8 b",
    "hostname": "HAT-P-8",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": null,
    "pl_masse": 414.45032,
    "sy_dist": 211.5530000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "HD 209458 b",
    "hostname": "HD 209458",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1999,
    "pl_orbper": 3.52474859,
    "pl_masse": 232.01590,
    "sy_dist": 48.3016000,
    "releasedate": "2018-12-06"
},
{
    "pl_name": "HD 209458 b",
    "hostname": "HD 209458",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1999,
    "pl_orbper": 3.52000000,
    "pl_masse": 219.30270,
    "sy_dist": 48.3016000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-10 b",
    "hostname": "WASP-10",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": null,
    "pl_masse": 1071.08710,
    "sy_dist": 140.9980000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "WASP-21 b",
    "hostname": "WASP-21",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.32248200,
    "pl_masse": 95.34500,
    "sy_dist": 258.4260000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-135 b",
    "hostname": "WASP-135",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 1.40137950,
    "pl_masse": null,
    "sy_dist": 298.2140000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "XO-1 b",
    "hostname": "XO-1",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 3.94153000,
    "pl_masse": 263.79890,
    "sy_dist": 163.5530000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "55 Cnc d",
    "hostname": "55 Cnc",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2002,
    "pl_orbper": 5574.20000000,
    "pl_masse": null,
    "sy_dist": 12.5855000,
    "releasedate": "2021-02-11"
},
{
    "pl_name": "WASP-92 b",
    "hostname": "WASP-92",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.17467420,
    "pl_masse": 255.85315,
    "sy_dist": 575.8890000,
    "releasedate": "2016-09-08"
},
{
    "pl_name": "WASP-32 b",
    "hostname": "WASP-32",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.71866151,
    "pl_masse": null,
    "sy_dist": 275.9940000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HATS-4 b",
    "hostname": "HATS-4",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.51672900,
    "pl_masse": 416.03947,
    "sy_dist": 416.4590000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-43 b",
    "hostname": "WASP-43",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.81347436,
    "pl_masse": null,
    "sy_dist": 86.7467000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "HAT-P-37 b",
    "hostname": "HAT-P-37",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.79743600,
    "pl_masse": 381.39600,
    "sy_dist": 390.5940000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-67 b",
    "hostname": "HAT-P-67",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 4.81010250,
    "pl_masse": 108.06220,
    "sy_dist": 371.6860000,
    "releasedate": "2017-04-13"
},
{
    "pl_name": "TrES-2 b",
    "hostname": "TrES-2",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 2.47061350,
    "pl_masse": null,
    "sy_dist": 215.3200000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": null,
    "pl_masse": 251.08570,
    "sy_dist": 393.0720000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994640,
    "pl_masse": 311.47340,
    "sy_dist": 393.0720000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994529,
    "pl_masse": 268.88418,
    "sy_dist": 393.0720000,
    "releasedate": "2016-03-31"
},
{
    "pl_name": "WASP-142 b",
    "hostname": "WASP-142",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.05286800,
    "pl_masse": null,
    "sy_dist": 730.9330000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HAT-P-56 b",
    "hostname": "HAT-P-56",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 2.79083270,
    "pl_masse": 603.87700,
    "sy_dist": 320.6390000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-30 b",
    "hostname": "HAT-P-30",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.81060000,
    "pl_masse": 263.79890,
    "sy_dist": 213.9850000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51996100,
    "pl_masse": 291.76794,
    "sy_dist": 393.0720000,
    "releasedate": "2016-02-25"
},
{
    "pl_name": "HAT-P-28 b",
    "hostname": "HAT-P-28",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.25721500,
    "pl_masse": 198.95300,
    "sy_dist": 401.3190000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994490,
    "pl_masse": 292.00000,
    "sy_dist": 393.0720000,
    "releasedate": "2014-05-16"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51996100,
    "pl_masse": 273.33380,
    "sy_dist": 393.0720000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994540,
    "pl_masse": 271.41500,
    "sy_dist": 393.0720000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Qatar-3 b",
    "hostname": "Qatar-3",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.50792040,
    "pl_masse": 1369.84730,
    "sy_dist": 735.6010000,
    "releasedate": "2017-04-27"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30500000,
    "pl_masse": 174.80650,
    "sy_dist": 431.0520000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30500110,
    "pl_masse": 160.50415,
    "sy_dist": 431.0520000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994480,
    "pl_masse": 301.30284,
    "sy_dist": 393.0720000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Qatar-7 b",
    "hostname": "Qatar-7",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 2.03204600,
    "pl_masse": 597.52040,
    "sy_dist": 705.9810000,
    "releasedate": "2020-05-07"
},
{
    "pl_name": "HAT-P-28 b",
    "hostname": "HAT-P-28",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.25721500,
    "pl_masse": 202.45771,
    "sy_dist": 401.3190000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Qatar-3 b",
    "hostname": "Qatar-3",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.50789520,
    "pl_masse": null,
    "sy_dist": 735.6010000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30500400,
    "pl_masse": 177.98480,
    "sy_dist": 431.0520000,
    "releasedate": "2019-12-05"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51995000,
    "pl_masse": 282.86870,
    "sy_dist": 393.0720000,
    "releasedate": "2016-03-10"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30500110,
    "pl_masse": 163.35800,
    "sy_dist": 431.0520000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-28 b",
    "hostname": "HAT-P-28",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.25721290,
    "pl_masse": null,
    "sy_dist": 401.3190000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994713,
    "pl_masse": null,
    "sy_dist": 393.0720000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30500700,
    "pl_masse": null,
    "sy_dist": 431.0520000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Qatar-3 b",
    "hostname": "Qatar-3",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.50789600,
    "pl_masse": null,
    "sy_dist": 735.6010000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Qatar-7 b",
    "hostname": "Qatar-7",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 2.03206900,
    "pl_masse": null,
    "sy_dist": 705.9810000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51994639,
    "pl_masse": null,
    "sy_dist": 393.0720000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30500300,
    "pl_masse": null,
    "sy_dist": 431.0520000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-28 b",
    "hostname": "HAT-P-28",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.25738980,
    "pl_masse": null,
    "sy_dist": 401.3190000,
    "releasedate": "2023-01-04"
},
{
    "pl_name": "WASP-1 b",
    "hostname": "WASP-1",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.51991456,
    "pl_masse": null,
    "sy_dist": 393.0720000,
    "releasedate": "2023-01-04"
},
{
    "pl_name": "WASP-60 b",
    "hostname": "WASP-60",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.30482901,
    "pl_masse": null,
    "sy_dist": 431.0520000,
    "releasedate": "2023-01-04"
},
{
    "pl_name": "Qatar-3 b",
    "hostname": "Qatar-3",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.50791765,
    "pl_masse": null,
    "sy_dist": 735.6010000,
    "releasedate": "2023-01-04"
},
{
    "pl_name": "Qatar-7 b",
    "hostname": "Qatar-7",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 2.03198834,
    "pl_masse": null,
    "sy_dist": 705.9810000,
    "releasedate": "2023-01-04"
},
{
    "pl_name": "CoRoT-1 b",
    "hostname": "CoRoT-1",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.50896877,
    "pl_masse": null,
    "sy_dist": 787.9090000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-144 b",
    "hostname": "WASP-144",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 2.27831350,
    "pl_masse": null,
    "sy_dist": 355.5130000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-26 b",
    "hostname": "WASP-26",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.75673949,
    "pl_masse": null,
    "sy_dist": 252.7590000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "WASP-29 b",
    "hostname": "WASP-29",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.92271860,
    "pl_masse": 77.55052,
    "sy_dist": 87.5953000,
    "releasedate": "2015-10-22"
},
{
    "pl_name": "HAT-P-20 b",
    "hostname": "HAT-P-20",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": null,
    "pl_masse": 2301.08920,
    "sy_dist": 71.0374000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "WASP-136 b",
    "hostname": "WASP-136",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.21535700,
    "pl_masse": 479.92330,
    "sy_dist": 275.5870000,
    "releasedate": "2016-12-01"
},
{
    "pl_name": "WASP-41 b",
    "hostname": "WASP-41",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.05244080,
    "pl_masse": null,
    "sy_dist": 163.3710000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "HATS-35 b",
    "hostname": "HATS-35",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 1.82069000,
    "pl_masse": null,
    "sy_dist": 514.5550000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-12 b",
    "hostname": "WASP-12",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.09141990,
    "pl_masse": 448.14030,
    "sy_dist": 427.2460000,
    "releasedate": "2019-11-07"
},
{
    "pl_name": "HAT-P-2 b",
    "hostname": "HAT-P-2",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 5.63347290,
    "pl_masse": 2777.83420,
    "sy_dist": 127.7740000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-24 b",
    "hostname": "WASP-24",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": null,
    "pl_masse": 355.65177,
    "sy_dist": 322.1140000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "HAT-P-37 b",
    "hostname": "HAT-P-37",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.79741651,
    "pl_masse": null,
    "sy_dist": 390.5940000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "WASP-65 b",
    "hostname": "WASP-65",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 2.31142069,
    "pl_masse": null,
    "sy_dist": 273.7030000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-46 b",
    "hostname": "WASP-46",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.43037000,
    "pl_masse": 667.73300,
    "sy_dist": 375.3100000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-26 b",
    "hostname": "HAT-P-26",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": null,
    "pl_masse": 18.91089,
    "sy_dist": 141.8370000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "WASP-24 b",
    "hostname": "WASP-24",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.34122166,
    "pl_masse": null,
    "sy_dist": 322.1140000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-55 b",
    "hostname": "HAT-P-55",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.58523164,
    "pl_masse": null,
    "sy_dist": 511.3880000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-5 b",
    "hostname": "HAT-P-5",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.78849100,
    "pl_masse": 336.89980,
    "sy_dist": 303.3360000,
    "releasedate": "2016-02-25"
},
{
    "pl_name": "WASP-63 b",
    "hostname": "WASP-63",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.37808300,
    "pl_masse": null,
    "sy_dist": 290.6840000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "55 Cnc b",
    "hostname": "55 Cnc",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1996,
    "pl_orbper": 14.65152000,
    "pl_masse": 263.97850,
    "sy_dist": 12.5855000,
    "releasedate": "2014-10-29"
},
{
    "pl_name": "WASP-184 b",
    "hostname": "WASP-184",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 5.18172900,
    "pl_masse": null,
    "sy_dist": 663.2310000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-43 b",
    "hostname": "HAT-P-43",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.33268300,
    "pl_masse": null,
    "sy_dist": 528.8250000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "TrES-2 b",
    "hostname": "TrES-2",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 2.47061339,
    "pl_masse": null,
    "sy_dist": 215.3200000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "WASP-42 b",
    "hostname": "WASP-42",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.98168190,
    "pl_masse": 167.49641,
    "sy_dist": 177.2910000,
    "releasedate": "2016-02-25"
},
{
    "pl_name": "HAT-P-43 b",
    "hostname": "HAT-P-43",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.33268080,
    "pl_masse": null,
    "sy_dist": 528.8250000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-19 b",
    "hostname": "HAT-P-19",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.00878420,
    "pl_masse": null,
    "sy_dist": 202.0780000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HAT-P-55 b",
    "hostname": "HAT-P-55",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.58524670,
    "pl_masse": 184.34140,
    "sy_dist": 511.3880000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-15 b",
    "hostname": "HAT-P-15",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 10.86350200,
    "pl_masse": 618.47100,
    "sy_dist": 192.5160000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "psi1 Dra B b",
    "hostname": "psi1 Dra B",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2015,
    "pl_orbper": 3117.00000000,
    "pl_masse": null,
    "sy_dist": 22.7188000,
    "releasedate": "2015-12-17"
},
{
    "pl_name": "WASP-34 b",
    "hostname": "WASP-34",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.31767790,
    "pl_masse": 181.16310,
    "sy_dist": 132.0960000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "HATS-46 b",
    "hostname": "HATS-46",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 4.74237140,
    "pl_masse": null,
    "sy_dist": 453.8080000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-66 b",
    "hostname": "WASP-66",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.08605200,
    "pl_masse": 737.33500,
    "sy_dist": 500.2580000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-12 b",
    "hostname": "WASP-12",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.09141911,
    "pl_masse": null,
    "sy_dist": 427.2460000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-69 b",
    "hostname": "HAT-P-69",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 4.78694910,
    "pl_masse": 1137.83140,
    "sy_dist": 341.2630000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "WASP-42 b",
    "hostname": "WASP-42",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.98168190,
    "pl_masse": null,
    "sy_dist": 177.2910000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "XO-3 b",
    "hostname": "XO-3",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.19154000,
    "pl_masse": 2316.98070,
    "sy_dist": 213.0530000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "WASP-13 b",
    "hostname": "WASP-13",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 4.35301100,
    "pl_masse": 166.86075,
    "sy_dist": 227.5370000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-29 b",
    "hostname": "WASP-29",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.92271159,
    "pl_masse": null,
    "sy_dist": 87.5953000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "TrES-1 b",
    "hostname": "TrES-1",
    "discoverymethod": "Transit",
    "disc_year": 2004,
    "pl_orbper": 3.03006500,
    "pl_masse": 238.99800,
    "sy_dist": 159.6580000,
    "releasedate": "2014-10-15"
},
{
    "pl_name": "HAT-P-69 b",
    "hostname": "HAT-P-69",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 4.78695500,
    "pl_masse": null,
    "sy_dist": 341.2630000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72673978,
    "pl_masse": 4.02000,
    "sy_dist": 95.9115000,
    "releasedate": "2015-04-16"
},
{
    "pl_name": "HAT-P-44 c",
    "hostname": "HAT-P-44",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2014,
    "pl_orbper": 872.20000000,
    "pl_masse": null,
    "sy_dist": 347.8500000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "CoRoT-1 b",
    "hostname": "CoRoT-1",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.50896350,
    "pl_masse": null,
    "sy_dist": 787.9090000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "HD 196067 b",
    "hostname": "HD 196067",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 3638.00000000,
    "pl_masse": null,
    "sy_dist": 39.9346000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-450 d",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 7.51439670,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-37 d",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 39.79223792,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24688133,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "WASP-48 b",
    "hostname": "WASP-48",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.14363601,
    "pl_masse": null,
    "sy_dist": 454.1440000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 16.14569077,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-65 c",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.85994400,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-468 b",
    "hostname": "Kepler-468",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.47874300,
    "pl_masse": null,
    "sy_dist": 442.8710000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "TOI-4329 b",
    "hostname": "TOI-4329",
    "discoverymethod": "Transit",
    "disc_year": 2022,
    "pl_orbper": 2.92230000,
    "pl_masse": 143.02278,
    "sy_dist": 717.1280000,
    "releasedate": "2022-03-16"
},
{
    "pl_name": "Kepler-65 b",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.15490904,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-1651 b",
    "hostname": "Kepler-1651",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 9.88515530,
    "pl_masse": null,
    "sy_dist": 66.4074000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-102 d",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 10.31173670,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-65 c",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "TOI-1333 b",
    "hostname": "TOI-1333",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 4.72021900,
    "pl_masse": 753.25710,
    "sy_dist": 200.4920000,
    "releasedate": "2021-03-04"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.23469931,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "KOI-94 c",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 10.42367744,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-210 b",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.45323590,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-37 d",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 39.79218700,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36730800,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "KOI-94 b",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 3.74316673,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-471 b",
    "hostname": "Kepler-471",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.01423250,
    "pl_masse": null,
    "sy_dist": 1249.4100000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29430100,
    "pl_masse": 13.98000,
    "sy_dist": 185.5060000,
    "releasedate": "2017-07-27"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "WASP-43 b",
    "hostname": "WASP-43",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.81347409,
    "pl_masse": null,
    "sy_dist": 86.7467000,
    "releasedate": "2015-01-08"
},
{
    "pl_name": "HAT-P-20 b",
    "hostname": "HAT-P-20",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.87531860,
    "pl_masse": 2310.62410,
    "sy_dist": 71.0374000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-53 b",
    "hostname": "WASP-53",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 3.30984314,
    "pl_masse": null,
    "sy_dist": 201.3380000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "KELT-11 b",
    "hostname": "KELT-11",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 4.73609900,
    "pl_masse": null,
    "sy_dist": 99.1596000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "XO-5 b",
    "hostname": "XO-5",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.18776000,
    "pl_masse": null,
    "sy_dist": 276.2110000,
    "releasedate": "2018-09-27"
},
{
    "pl_name": "HAT-P-34 b",
    "hostname": "HAT-P-34",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 5.45265760,
    "pl_masse": null,
    "sy_dist": 249.3250000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-102 d",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 10.31173752,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "WASP-182 b",
    "hostname": "WASP-182",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 3.37698950,
    "pl_masse": null,
    "sy_dist": 327.6020000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-1651 b",
    "hostname": "Kepler-1651",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 9.87863917,
    "pl_masse": null,
    "sy_dist": 66.4074000,
    "releasedate": "2017-05-25"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 54.31983200,
    "pl_masse": 13.00000,
    "sy_dist": 477.0520000,
    "releasedate": "2015-09-03"
},
{
    "pl_name": "Kepler-493 b",
    "hostname": "Kepler-493",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.00387520,
    "pl_masse": null,
    "sy_dist": 1745.7700000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-506 b",
    "hostname": "Kepler-506",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 6.88340359,
    "pl_masse": null,
    "sy_dist": 228.4390000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "KELT-1 b",
    "hostname": "KELT-1",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 1.21751630,
    "pl_masse": null,
    "sy_dist": 268.4300000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "Kepler-210 c",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.97266437,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-471 b",
    "hostname": "Kepler-471",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.01423457,
    "pl_masse": null,
    "sy_dist": 1249.4100000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749968,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "TrES-4 b",
    "hostname": "TrES-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.55394500,
    "pl_masse": 278.73691,
    "sy_dist": 515.9800000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "Kepler-210 c",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.97251009,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-450 b",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 28.45492088,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "WASP-63 b",
    "hostname": "WASP-63",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.37808065,
    "pl_masse": null,
    "sy_dist": 290.6840000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "TrES-5 b",
    "hostname": "TrES-5",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.48224460,
    "pl_masse": 565.07800,
    "sy_dist": 360.3130000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-8 b",
    "hostname": "WASP-8",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 8.15845453,
    "pl_masse": null,
    "sy_dist": 89.9606000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-13 b",
    "hostname": "WASP-13",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 4.35301350,
    "pl_masse": 158.91500,
    "sy_dist": 227.5370000,
    "releasedate": "2021-01-28"
},
{
    "pl_name": "WASP-174 b",
    "hostname": "WASP-174",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 4.23370050,
    "pl_masse": 104.88337,
    "sy_dist": 410.1490000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "55 Cnc b",
    "hostname": "55 Cnc",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1996,
    "pl_orbper": 14.65160000,
    "pl_masse": null,
    "sy_dist": 12.5855000,
    "releasedate": "2021-02-11"
},
{
    "pl_name": "WASP-24 b",
    "hostname": "WASP-24",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.34121270,
    "pl_masse": null,
    "sy_dist": 322.1140000,
    "releasedate": "2019-12-05"
},
{
    "pl_name": "WASP-98 b",
    "hostname": "WASP-98",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.96264150,
    "pl_masse": null,
    "sy_dist": 281.7420000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "KELT-18 b",
    "hostname": "KELT-18",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.87170230,
    "pl_masse": null,
    "sy_dist": 321.3760000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-119 b",
    "hostname": "WASP-119",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.49979960,
    "pl_masse": null,
    "sy_dist": 302.4480000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-37 b",
    "hostname": "WASP-37",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.57746900,
    "pl_masse": 572.07000,
    "sy_dist": 392.7910000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-36 b",
    "hostname": "HAT-P-36",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.32734686,
    "pl_masse": null,
    "sy_dist": 294.4190000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-30 b",
    "hostname": "HAT-P-30",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.81060840,
    "pl_masse": 232.96939,
    "sy_dist": 213.9850000,
    "releasedate": "2016-04-28"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29406000,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "WASP-29 b",
    "hostname": "WASP-29",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.92271860,
    "pl_masse": 77.86835,
    "sy_dist": 87.5953000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Kepler-856 b",
    "hostname": "Kepler-856",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 8.02768209,
    "pl_masse": null,
    "sy_dist": 1351.1700000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-37 d",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 39.79220077,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-210 c",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.97251347,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-471 b",
    "hostname": "Kepler-471",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.01423473,
    "pl_masse": null,
    "sy_dist": 1249.4100000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07136076,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-65 b",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.15491000,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "TrES-4 b",
    "hostname": "TrES-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.55392771,
    "pl_masse": 158.27934,
    "sy_dist": 515.9800000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13135942,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2015-01-29"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "KOI-94 c",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "KOI-94 b",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 3.74324500,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "WASP-113 b",
    "hostname": "WASP-113",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 4.54216690,
    "pl_masse": null,
    "sy_dist": 435.1560000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-37 e",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit Timing Variations",
    "disc_year": 2014,
    "pl_orbper": 51.20690000,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-37 e",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit Timing Variations",
    "disc_year": 2014,
    "pl_orbper": 51.20690303,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13122484,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-102 f",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 27.45372940,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-522 b",
    "hostname": "Kepler-522",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.58443238,
    "pl_masse": null,
    "sy_dist": 639.2390000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13121389,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-102 f",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 27.45392409,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-495 b",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.41303622,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-493 b",
    "hostname": "Kepler-493",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.00387658,
    "pl_masse": null,
    "sy_dist": 1745.7700000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-468 b",
    "hostname": "Kepler-468",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.47875707,
    "pl_masse": null,
    "sy_dist": 442.8710000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.23469955,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "WASP-54 b",
    "hostname": "WASP-54",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.69364110,
    "pl_masse": 192.60498,
    "sy_dist": 251.3030000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Kepler-65 b",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.15491124,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 15.41308581,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-37 c",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 21.30199109,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-102 b",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.28696522,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50805735,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "KOI-94 d",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-450 b",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749080,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 16.14569077,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "KOI-94 c",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 10.42364800,
    "pl_masse": 15.60000,
    "sy_dist": 477.0520000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36805000,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2015-05-21"
},
{
    "pl_name": "WASP-153 b",
    "hostname": "WASP-153",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 3.33260900,
    "pl_masse": null,
    "sy_dist": 610.1760000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-61 b",
    "hostname": "WASP-61",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.85589655,
    "pl_masse": null,
    "sy_dist": 488.6600000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-178 b",
    "hostname": "WASP-178",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 3.34484040,
    "pl_masse": null,
    "sy_dist": 427.6780000,
    "releasedate": "2022-10-10"
},
{
    "pl_name": "WASP-16 b",
    "hostname": "WASP-16",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.11859800,
    "pl_masse": null,
    "sy_dist": 194.1340000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "Kepler-495 b",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.41303635,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-65 e",
    "hostname": "Kepler-65",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2019,
    "pl_orbper": 258.80000000,
    "pl_masse": 260.00000,
    "sy_dist": 303.7280000,
    "releasedate": "2019-06-13"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 54.31998605,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "HAT-P-6 b",
    "hostname": "HAT-P-6",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.85298000,
    "pl_masse": 419.53560,
    "sy_dist": 275.3580000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "Kepler-468 b",
    "hostname": "Kepler-468",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.47876131,
    "pl_masse": null,
    "sy_dist": 442.8710000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 15.41313731,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-1651 b",
    "hostname": "Kepler-1651",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 9.87864610,
    "pl_masse": null,
    "sy_dist": 66.4074000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780490,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2019-10-24"
},
{
    "pl_name": "Kepler-102 d",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07139151,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 95.9115000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-522 b",
    "hostname": "Kepler-522",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.58336000,
    "pl_masse": null,
    "sy_dist": 639.2390000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "KOI-94 c",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 10.42368297,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "WASP-113 b",
    "hostname": "WASP-113",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 4.54217000,
    "pl_masse": null,
    "sy_dist": 435.1560000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24658000,
    "pl_masse": 279.68000,
    "sy_dist": 1294.6900000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780244,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2019-01-31"
},
{
    "pl_name": "KELT-1 b",
    "hostname": "KELT-1",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 1.21749400,
    "pl_masse": null,
    "sy_dist": 268.4300000,
    "releasedate": "2018-02-15"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749070,
    "pl_masse": 3.33000,
    "sy_dist": 185.5060000,
    "releasedate": "2014-06-02"
},
{
    "pl_name": "HD 189733 b",
    "hostname": "HD 189733",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2005,
    "pl_orbper": 2.21857520,
    "pl_masse": 356.92309,
    "sy_dist": 19.7638000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-19 b",
    "hostname": "HAT-P-19",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.00878420,
    "pl_masse": null,
    "sy_dist": 202.0780000,
    "releasedate": "2015-11-19"
},
{
    "pl_name": "Kepler-102 f",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 27.45372940,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36702031,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-37 c",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 21.30200000,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "HAT-P-6 b",
    "hostname": "HAT-P-6",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": null,
    "pl_masse": 351.83781,
    "sy_dist": 275.3580000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13100000,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2014-05-28"
},
{
    "pl_name": "Kepler-495 c",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 5.89686000,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "KOI-94 c",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 10.42367744,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-65 c",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.85993872,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 16.14569077,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "KOI-94 b",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "WASP-48 b",
    "hostname": "WASP-48",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.14363000,
    "pl_masse": 254.26400,
    "sy_dist": 454.1440000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29429200,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2015-05-21"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24654458,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-450 b",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 28.45485100,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2015-05-21"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36693090,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72673947,
    "pl_masse": null,
    "sy_dist": 95.9115000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780308,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-210 b",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-450 d",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 7.51450475,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "KELT-1 b",
    "hostname": "KELT-1",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 1.21751400,
    "pl_masse": 8654.15000,
    "sy_dist": 268.4300000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-102 f",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 27.45359210,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "TOI-3540 A b",
    "hostname": "TOI-3540 A",
    "discoverymethod": "Transit",
    "disc_year": 2022,
    "pl_orbper": 3.11984039,
    "pl_masse": null,
    "sy_dist": null,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-102 d",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 10.31173200,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "HAT-P-34 b",
    "hostname": "HAT-P-34",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 5.45264700,
    "pl_masse": null,
    "sy_dist": 249.3250000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "WASP-110 b",
    "hostname": "WASP-110",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 3.77840121,
    "pl_masse": 162.09249,
    "sy_dist": 274.9600000,
    "releasedate": "2021-06-11"
},
{
    "pl_name": "WASP-145 A b",
    "hostname": "WASP-145 A",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 1.76901210,
    "pl_masse": null,
    "sy_dist": 91.2990000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "HAT-P-30 b",
    "hostname": "HAT-P-30",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.81059500,
    "pl_masse": 237.10118,
    "sy_dist": 213.9850000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "KELT-24 b",
    "hostname": "KELT-24",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 5.55149750,
    "pl_masse": null,
    "sy_dist": 96.5173000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-12 b",
    "hostname": "WASP-12",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.09141670,
    "pl_masse": null,
    "sy_dist": 427.2460000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "WASP-45 b",
    "hostname": "WASP-45",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.12608760,
    "pl_masse": 318.78349,
    "sy_dist": 211.1960000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "Kepler-670 b",
    "hostname": "Kepler-670",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.81650521,
    "pl_masse": null,
    "sy_dist": 939.7440000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "HATS-48 A b",
    "hostname": "HATS-48 A",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 3.13166660,
    "pl_masse": 77.23269,
    "sy_dist": 263.6090000,
    "releasedate": "2020-02-27"
},
{
    "pl_name": "K2-261 b",
    "hostname": "K2-261",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 11.63344000,
    "pl_masse": 70.87609,
    "sy_dist": 213.2830000,
    "releasedate": "2018-08-16"
},
{
    "pl_name": "HAT-P-33 b",
    "hostname": "HAT-P-33",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.47447613,
    "pl_masse": null,
    "sy_dist": 396.1100000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-3 b",
    "hostname": "HAT-P-3",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.89973838,
    "pl_masse": 189.10885,
    "sy_dist": 134.5540000,
    "releasedate": "2019-10-24"
},
{
    "pl_name": "HATS-17 b",
    "hostname": "HATS-17",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 16.25779900,
    "pl_masse": null,
    "sy_dist": 400.3310000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-55 b",
    "hostname": "WASP-55",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.46562940,
    "pl_masse": null,
    "sy_dist": 297.4620000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-38 b",
    "hostname": "WASP-38",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 6.90000000,
    "pl_masse": 858.10000,
    "sy_dist": 136.2400000,
    "releasedate": "2015-02-12"
},
{
    "pl_name": "TrES-1 b",
    "hostname": "TrES-1",
    "discoverymethod": "Transit",
    "disc_year": 2004,
    "pl_orbper": 3.03007370,
    "pl_masse": null,
    "sy_dist": 159.6580000,
    "releasedate": "2019-12-05"
},
{
    "pl_name": "CoRoT-2 b",
    "hostname": "CoRoT-2",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 1.74299700,
    "pl_masse": null,
    "sy_dist": 213.2830000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-50 b",
    "hostname": "WASP-50",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.95509380,
    "pl_masse": 464.03180,
    "sy_dist": 184.8480000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-62 b",
    "hostname": "WASP-62",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.41194000,
    "pl_masse": 184.34140,
    "sy_dist": 175.6310000,
    "releasedate": "2020-10-22"
},
{
    "pl_name": "WASP-175 b",
    "hostname": "WASP-175",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 3.06529610,
    "pl_masse": null,
    "sy_dist": 539.3600000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88782000,
    "pl_masse": 28.60470,
    "sy_dist": 37.7647000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "HAT-P-19 b",
    "hostname": "HAT-P-19",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.00878403,
    "pl_masse": null,
    "sy_dist": 202.0780000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-58 b",
    "hostname": "WASP-58",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.01721119,
    "pl_masse": null,
    "sy_dist": 290.4040000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "HAT-P-6 b",
    "hostname": "HAT-P-6",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 275.3580000,
    "releasedate": "2019-10-24"
},
{
    "pl_name": "Kepler-37 c",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 21.30199109,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 15.41308120,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-37 d",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 79.58399947,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-495 c",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 5.89661090,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-210 b",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.45320000,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2015-08-27"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749070,
    "pl_masse": 3.72000,
    "sy_dist": 185.5060000,
    "releasedate": "2017-07-27"
},
{
    "pl_name": "WASP-48 b",
    "hostname": "WASP-48",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.14363544,
    "pl_masse": 288.00000,
    "sy_dist": 454.1440000,
    "releasedate": "2015-03-26"
},
{
    "pl_name": "WASP-54 b",
    "hostname": "WASP-54",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.69359967,
    "pl_masse": null,
    "sy_dist": 251.3030000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-522 b",
    "hostname": "Kepler-522",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.58422849,
    "pl_masse": null,
    "sy_dist": 639.2390000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50805761,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "KOI-94 d",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 22.34300100,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "WASP-187 b",
    "hostname": "WASP-187",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 5.14788280,
    "pl_masse": null,
    "sy_dist": 371.4140000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 54.31998605,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-102 b",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.28696000,
    "pl_masse": 4.30000,
    "sy_dist": 107.7960000,
    "releasedate": "2016-10-13"
},
{
    "pl_name": "TrES-4 b",
    "hostname": "TrES-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.55392660,
    "pl_masse": null,
    "sy_dist": 515.9800000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Kepler-65 b",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.15491560,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2015-05-21"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 15.41308581,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "HATS-55 b",
    "hostname": "HATS-55",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 4.20420010,
    "pl_masse": 292.72143,
    "sy_dist": 609.8380000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "HATS-6 b",
    "hostname": "HATS-6",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.32527150,
    "pl_masse": null,
    "sy_dist": 169.3180000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-67 b",
    "hostname": "WASP-67",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.61441660,
    "pl_masse": null,
    "sy_dist": 189.4690000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "KELT-1 b",
    "hostname": "KELT-1",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 1.21749399,
    "pl_masse": null,
    "sy_dist": 268.4300000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29431400,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "Kepler-450 b",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 28.45489091,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-495 c",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 5.89661966,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07136076,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-471 b",
    "hostname": "Kepler-471",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.01423457,
    "pl_masse": null,
    "sy_dist": 1249.4100000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72674000,
    "pl_masse": 4.54426,
    "sy_dist": 95.9115000,
    "releasedate": "2020-11-19"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29485000,
    "pl_masse": 20.00000,
    "sy_dist": 185.5060000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.23469900,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50808155,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-856 b",
    "hostname": "Kepler-856",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 8.02768059,
    "pl_masse": null,
    "sy_dist": 1351.1700000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780232,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-210 c",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.97251347,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749100,
    "pl_masse": 4.60853,
    "sy_dist": 185.5060000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "Kepler-1651 b",
    "hostname": "Kepler-1651",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 9.88515530,
    "pl_masse": null,
    "sy_dist": 66.4074000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-506 b",
    "hostname": "Kepler-506",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 6.88341278,
    "pl_masse": null,
    "sy_dist": 228.4390000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "HATS-51 b",
    "hostname": "HATS-51",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 3.34887030,
    "pl_masse": null,
    "sy_dist": 389.5700000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HATS-13 b",
    "hostname": "HATS-13",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.04405460,
    "pl_masse": null,
    "sy_dist": 421.8550000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HATS-5 b",
    "hostname": "HATS-5",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.76338700,
    "pl_masse": 75.64354,
    "sy_dist": 246.3840000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "OGLE-TR-113 b",
    "hostname": "OGLE-TR-113",
    "discoverymethod": "Transit",
    "disc_year": 2004,
    "pl_orbper": 1.43247570,
    "pl_masse": 394.10920,
    "sy_dist": 566.4590000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "Kepler-670 b",
    "hostname": "Kepler-670",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.81740500,
    "pl_masse": null,
    "sy_dist": 939.7440000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Qatar-5 b",
    "hostname": "Qatar-5",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.87931050,
    "pl_masse": null,
    "sy_dist": 367.6580000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "4 UMa b",
    "hostname": "4 UMa",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2006,
    "pl_orbper": 269.30000000,
    "pl_masse": null,
    "sy_dist": 73.4603000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-56 b",
    "hostname": "HAT-P-56",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 2.79088210,
    "pl_masse": null,
    "sy_dist": 320.6390000,
    "releasedate": "2015-12-05"
},
{
    "pl_name": "WASP-107 b",
    "hostname": "WASP-107",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 64.7414000,
    "releasedate": "2022-10-03"
},
{
    "pl_name": "KELT-15 b",
    "hostname": "KELT-15",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.32944000,
    "pl_masse": 416.35730,
    "sy_dist": 324.6830000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "Kepler-426 b",
    "hostname": "Kepler-426",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 3.21751851,
    "pl_masse": null,
    "sy_dist": 843.6950000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "HAT-P-3 b",
    "hostname": "HAT-P-3",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.89974050,
    "pl_masse": null,
    "sy_dist": 134.5540000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-85 A b",
    "hostname": "WASP-85 A",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.65567650,
    "pl_masse": null,
    "sy_dist": 141.8870000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-31 b",
    "hostname": "WASP-31",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.40000000,
    "pl_masse": 152.55840,
    "sy_dist": 383.8290000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-18 b",
    "hostname": "WASP-18",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 0.94145181,
    "pl_masse": 3270.47070,
    "sy_dist": 123.4830000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "HATS-33 b",
    "hostname": "HATS-33",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.54956400,
    "pl_masse": null,
    "sy_dist": 248.4600000,
    "releasedate": "2021-03-04"
},
{
    "pl_name": "WASP-19 b",
    "hostname": "WASP-19",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 0.78883900,
    "pl_masse": 370.27195,
    "sy_dist": 268.3250000,
    "releasedate": "2015-10-22"
},
{
    "pl_name": "WASP-11 b",
    "hostname": "WASP-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 3.72247896,
    "pl_masse": null,
    "sy_dist": 124.7300000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-12 b",
    "hostname": "Kepler-12",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 4.43796303,
    "pl_masse": null,
    "sy_dist": 881.3860000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "HAT-P-59 b",
    "hostname": "HAT-P-59",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 4.14197710,
    "pl_masse": 489.45575,
    "sy_dist": 265.4710000,
    "releasedate": "2021-07-26"
},
{
    "pl_name": "WASP-18 b",
    "hostname": "WASP-18",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 0.94145260,
    "pl_masse": 3305.43200,
    "sy_dist": 123.4830000,
    "releasedate": "2019-09-26"
},
{
    "pl_name": "WASP-4 b",
    "hostname": "WASP-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 1.33823187,
    "pl_masse": 393.13900,
    "sy_dist": 267.2060000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-105 b",
    "hostname": "WASP-105",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 7.87289368,
    "pl_masse": null,
    "sy_dist": 169.2720000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "XO-5 b",
    "hostname": "XO-5",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.18775580,
    "pl_masse": 378.20000,
    "sy_dist": 276.2110000,
    "releasedate": "2015-02-12"
},
{
    "pl_name": "WASP-104 b",
    "hostname": "WASP-104",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 1.75541370,
    "pl_masse": 403.00844,
    "sy_dist": 185.9320000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HAT-P-12 b",
    "hostname": "HAT-P-12",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.21305790,
    "pl_masse": 67.06213,
    "sy_dist": 142.7510000,
    "releasedate": "2019-11-07"
},
{
    "pl_name": "KOI-94 b",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 3.74317556,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-450 b",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 28.45492088,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 54.31998605,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-37 c",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 21.30200000,
    "pl_masse": 12.00000,
    "sy_dist": 63.9207000,
    "releasedate": "2016-10-27"
},
{
    "pl_name": "Kepler-495 b",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36731000,
    "pl_masse": 3.17830,
    "sy_dist": 63.9207000,
    "releasedate": "2020-11-19"
},
{
    "pl_name": "Kepler-856 b",
    "hostname": "Kepler-856",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 8.02767290,
    "pl_masse": null,
    "sy_dist": 1351.1700000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-37 d",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 39.79223792,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-65 c",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.85993872,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 54.31998150,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83750100,
    "pl_masse": 3.24000,
    "sy_dist": 185.5060000,
    "releasedate": "2017-07-27"
},
{
    "pl_name": "TOI-1431 b",
    "hostname": "TOI-1431",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 2.65023700,
    "pl_masse": 991.62463,
    "sy_dist": 148.9250000,
    "releasedate": "2021-10-11"
},
{
    "pl_name": "WASP-54 b",
    "hostname": "WASP-54",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.69359990,
    "pl_masse": null,
    "sy_dist": 251.3030000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "Kepler-471 b",
    "hostname": "Kepler-471",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.01423457,
    "pl_masse": null,
    "sy_dist": 1249.4100000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "WASP-54 b",
    "hostname": "WASP-54",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.69364110,
    "pl_masse": 202.13100,
    "sy_dist": 251.3030000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50805735,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 15.41312100,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-210 b",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.45322394,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2016-02-25"
},
{
    "pl_name": "Kepler-506 b",
    "hostname": "Kepler-506",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 6.88341278,
    "pl_masse": null,
    "sy_dist": 228.4390000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07136119,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88781620,
    "pl_masse": 25.74300,
    "sy_dist": 37.7647000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-522 b",
    "hostname": "Kepler-522",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.58422849,
    "pl_masse": null,
    "sy_dist": 639.2390000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.23469940,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "KELT-15 b",
    "hostname": "KELT-15",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.32946630,
    "pl_masse": null,
    "sy_dist": 324.6830000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-19 b",
    "hostname": "WASP-19",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 0.78883919,
    "pl_masse": null,
    "sy_dist": 268.3250000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-79 b",
    "hostname": "WASP-79",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.66238660,
    "pl_masse": 267.93069,
    "sy_dist": 246.6900000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-62 b",
    "hostname": "WASP-62",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.41195300,
    "pl_masse": 180.52744,
    "sy_dist": 175.6310000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-36 b",
    "hostname": "WASP-36",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.53736530,
    "pl_masse": 729.73768,
    "sy_dist": 386.3460000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "OGLE-2019-BLG-1470L AB c",
    "hostname": "OGLE-2019-BLG-1470L A",
    "discoverymethod": "Microlensing",
    "disc_year": 2022,
    "pl_orbper": null,
    "pl_masse": 985.26806,
    "sy_dist": 5600.0000000,
    "releasedate": "2022-09-19"
},
{
    "pl_name": "OGLE-2019-BLG-1470L AB c",
    "hostname": "OGLE-2019-BLG-1470L A",
    "discoverymethod": "Microlensing",
    "disc_year": 2022,
    "pl_orbper": null,
    "pl_masse": 1716.27340,
    "sy_dist": 6100.0000000,
    "releasedate": "2022-09-19"
},
{
    "pl_name": "OGLE-2019-BLG-1470L AB c",
    "hostname": "OGLE-2019-BLG-1470L A",
    "discoverymethod": "Microlensing",
    "disc_year": 2022,
    "pl_orbper": null,
    "pl_masse": 794.57102,
    "sy_dist": 5100.0000000,
    "releasedate": "2022-09-19"
},
{
    "pl_name": "WASP-24 b",
    "hostname": "WASP-24",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.34099090,
    "pl_masse": null,
    "sy_dist": 322.1140000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "K2-115 b",
    "hostname": "K2-115",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 20.27303400,
    "pl_masse": 266.97720,
    "sy_dist": 413.5910000,
    "releasedate": "2017-09-28"
},
{
    "pl_name": "HD 142245 b",
    "hostname": "HD 142245",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 1299.00000000,
    "pl_masse": null,
    "sy_dist": 97.2305000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 1502 b",
    "hostname": "HD 1502",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 431.80000000,
    "pl_masse": null,
    "sy_dist": 190.9530000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 28678 b",
    "hostname": "HD 28678",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 387.10000000,
    "pl_masse": null,
    "sy_dist": 189.9080000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 5891 b",
    "hostname": "HD 5891",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 177.11000000,
    "pl_masse": null,
    "sy_dist": 283.5020000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 106270 b",
    "hostname": "HD 106270",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 2890.00000000,
    "pl_masse": null,
    "sy_dist": 93.8080000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 82886 b",
    "hostname": "HD 82886",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 705.00000000,
    "pl_masse": null,
    "sy_dist": 127.0610000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 116029 b",
    "hostname": "HD 116029",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 670.00000000,
    "pl_masse": null,
    "sy_dist": 123.2450000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 99706 b",
    "hostname": "HD 99706",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 868.00000000,
    "pl_masse": null,
    "sy_dist": 146.6000000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 163607 c",
    "hostname": "HD 163607",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2010,
    "pl_orbper": 1314.00000000,
    "pl_masse": null,
    "sy_dist": 67.7855000,
    "releasedate": "2014-06-25"
},
{
    "pl_name": "HD 164509 b",
    "hostname": "HD 164509",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2010,
    "pl_orbper": 282.40000000,
    "pl_masse": null,
    "sy_dist": 53.1119000,
    "releasedate": "2014-06-25"
},
{
    "pl_name": "HD 181720 b",
    "hostname": "HD 181720",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 956.00000000,
    "pl_masse": null,
    "sy_dist": 60.2046000,
    "releasedate": "2014-07-23"
},
{
    "pl_name": "HD 190984 b",
    "hostname": "HD 190984",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 4885.00000000,
    "pl_masse": null,
    "sy_dist": 148.1870000,
    "releasedate": "2014-08-21"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29431717,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "HD 103774 b",
    "hostname": "HD 103774",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 5.88810000,
    "pl_masse": null,
    "sy_dist": 56.4089000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 109271 c",
    "hostname": "HD 109271",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 30.93000000,
    "pl_masse": null,
    "sy_dist": 55.8716000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 166724 b",
    "hostname": "HD 166724",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 5144.00000000,
    "pl_masse": null,
    "sy_dist": 45.1342000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 220689 b",
    "hostname": "HD 220689",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 2209.00000000,
    "pl_masse": null,
    "sy_dist": 46.8778000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-450 b",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 28.54105573,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-522 b",
    "hostname": "Kepler-522",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 38.58422849,
    "pl_masse": null,
    "sy_dist": 639.2390000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07136076,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13114600,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780060,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-450 d",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 7.51464000,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2015-05-21"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24650863,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-495 b",
    "hostname": "Kepler-495",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.41303635,
    "pl_masse": null,
    "sy_dist": 658.9240000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-506 b",
    "hostname": "Kepler-506",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 6.88340550,
    "pl_masse": null,
    "sy_dist": 228.4390000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 16.14567193,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "WASP-48 b",
    "hostname": "WASP-48",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.14363640,
    "pl_masse": null,
    "sy_dist": 454.1440000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36693090,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-37 b",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 13.36744000,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07136076,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749133,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50805750,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "HD 27631 b",
    "hostname": "HD 27631",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 2208.00000000,
    "pl_masse": null,
    "sy_dist": 50.2862000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 30562 b",
    "hostname": "HD 30562",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2009,
    "pl_orbper": 1159.20000000,
    "pl_masse": null,
    "sy_dist": 26.1597000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 10647 b",
    "hostname": "HD 10647",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2006,
    "pl_orbper": 989.20000000,
    "pl_masse": null,
    "sy_dist": 17.3357000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 222155 b",
    "hostname": "HD 222155",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 3999.00000000,
    "pl_masse": null,
    "sy_dist": 50.6078000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 150706 b",
    "hostname": "HD 150706",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2012,
    "pl_orbper": 5894.00000000,
    "pl_masse": null,
    "sy_dist": 28.2697000,
    "releasedate": "2014-07-23"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07136119,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "WASP-48 b",
    "hostname": "WASP-48",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.14363592,
    "pl_masse": 312.74472,
    "sy_dist": 454.1440000,
    "releasedate": "2016-03-31"
},
{
    "pl_name": "Kepler-102 c",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.07145665,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.23469931,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72674037,
    "pl_masse": null,
    "sy_dist": 95.9115000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24668005,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-856 b",
    "hostname": "Kepler-856",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 8.02768059,
    "pl_masse": null,
    "sy_dist": 1351.1700000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "KOI-94 c",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 10.42367777,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50809097,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2016-02-25"
},
{
    "pl_name": "Kepler-65 c",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.85993872,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-94 b",
    "hostname": "Kepler-94",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.50805735,
    "pl_masse": null,
    "sy_dist": 191.9040000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 16.14568500,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-10 b",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 0.83749122,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "HIP 57274 b",
    "hostname": "HIP 57274",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 8.13520000,
    "pl_masse": null,
    "sy_dist": 25.8618000,
    "releasedate": "2015-04-24"
},
{
    "pl_name": "HIP 57274 c",
    "hostname": "HIP 57274",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2011,
    "pl_orbper": 32.03000000,
    "pl_masse": null,
    "sy_dist": 25.8618000,
    "releasedate": "2015-04-24"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72664724,
    "pl_masse": null,
    "sy_dist": 95.9115000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72674002,
    "pl_masse": null,
    "sy_dist": 95.9115000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24668005,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "PSR B1257+12 c",
    "hostname": "PSR B1257+12",
    "discoverymethod": "Pulsar Timing",
    "disc_year": 1992,
    "pl_orbper": 66.56300000,
    "pl_masse": null,
    "sy_dist": 600.0000000,
    "releasedate": "2015-04-30"
},
{
    "pl_name": "PSR B1257+12 c",
    "hostname": "PSR B1257+12",
    "discoverymethod": "Pulsar Timing",
    "disc_year": 1992,
    "pl_orbper": 66.53600000,
    "pl_masse": null,
    "sy_dist": 600.0000000,
    "releasedate": "2015-04-30"
},
{
    "pl_name": "HD 2952 b",
    "hostname": "HD 2952",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 311.60000000,
    "pl_masse": null,
    "sy_dist": 110.1030000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "BD+15 2940 b",
    "hostname": "BD+15 2940",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 137.48000000,
    "pl_masse": null,
    "sy_dist": 426.4200000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "mu Leo b",
    "hostname": "mu Leo",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2014,
    "pl_orbper": 357.80000000,
    "pl_masse": null,
    "sy_dist": 32.6081000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 155233 b",
    "hostname": "HD 155233",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2015,
    "pl_orbper": 885.00000000,
    "pl_masse": null,
    "sy_dist": 74.2309000,
    "releasedate": "2015-10-22"
},
{
    "pl_name": "CoRoT-9 b",
    "hostname": "CoRoT-9",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 95.27272500,
    "pl_masse": null,
    "sy_dist": 412.9800000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-120 b",
    "hostname": "WASP-120",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.61126206,
    "pl_masse": null,
    "sy_dist": 381.1740000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-14 b",
    "hostname": "WASP-14",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 2.24375200,
    "pl_masse": 2333.00000,
    "sy_dist": 161.9970000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-731 b",
    "hostname": "Kepler-731",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.85560355,
    "pl_masse": null,
    "sy_dist": 1257.1600000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "HATS-5 b",
    "hostname": "HATS-5",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.76338770,
    "pl_masse": null,
    "sy_dist": 246.3840000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HATS-27 b",
    "hostname": "HATS-27",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 4.63704787,
    "pl_masse": null,
    "sy_dist": 816.9880000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "HAT-P-25 b",
    "hostname": "HAT-P-25",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.65282100,
    "pl_masse": null,
    "sy_dist": 300.3840000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "KOI-94 b",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 3.74317556,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780271,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2015-08-25"
},
{
    "pl_name": "TrES-4 b",
    "hostname": "TrES-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.55394500,
    "pl_masse": null,
    "sy_dist": 515.9800000,
    "releasedate": "2019-12-05"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24658000,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29418350,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-210 c",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2018-09-06"
},
{
    "pl_name": "Kepler-1651 b",
    "hostname": "Kepler-1651",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 9.87868380,
    "pl_masse": null,
    "sy_dist": 66.4074000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-10 c",
    "hostname": "Kepler-10",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 45.29422297,
    "pl_masse": null,
    "sy_dist": 185.5060000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-37 d",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 39.79223200,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2013-10-28"
},
{
    "pl_name": "KOI-94 b",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 3.74317556,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2014-11-18"
},
{
    "pl_name": "WASP-113 b",
    "hostname": "WASP-113",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 4.54215940,
    "pl_masse": null,
    "sy_dist": 435.1560000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-102 f",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 27.45361460,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-102 d",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 10.31174786,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24667547,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-210 b",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.45322973,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2019-04-18"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72673947,
    "pl_masse": null,
    "sy_dist": 95.9115000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-93 b",
    "hostname": "Kepler-93",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.72674000,
    "pl_masse": 2.59000,
    "sy_dist": 95.9115000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "TOI-1431 b",
    "hostname": "TOI-1431",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 2.65023080,
    "pl_masse": null,
    "sy_dist": 148.9250000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "TrES-4 b",
    "hostname": "TrES-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 3.55394500,
    "pl_masse": 292.07300,
    "sy_dist": 515.9800000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-210 c",
    "hostname": "Kepler-210",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 7.97251614,
    "pl_masse": null,
    "sy_dist": 232.7500000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-102 b",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 5.28695437,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24668005,
    "pl_masse": null,
    "sy_dist": 1294.6900000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "Kepler-65 c",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.85993596,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13167000,
    "pl_masse": 4.14000,
    "sy_dist": 303.7280000,
    "releasedate": "2019-06-13"
},
{
    "pl_name": "TOI-1181 b",
    "hostname": "TOI-1181",
    "discoverymethod": "Transit",
    "disc_year": 2022,
    "pl_orbper": 2.10319420,
    "pl_masse": null,
    "sy_dist": 302.8190000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-65 d",
    "hostname": "Kepler-65",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 8.13121389,
    "pl_masse": null,
    "sy_dist": 303.7280000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-450 c",
    "hostname": "Kepler-450",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 15.41308120,
    "pl_masse": null,
    "sy_dist": 455.9820000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "K2-353 b",
    "hostname": "K2-353",
    "discoverymethod": "Transit",
    "disc_year": 2021,
    "pl_orbper": 15.46586910,
    "pl_masse": null,
    "sy_dist": 268.5150000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780308,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "HAT-P-11 b",
    "hostname": "HAT-P-11",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.88780267,
    "pl_masse": null,
    "sy_dist": 37.7647000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "Kepler-91 b",
    "hostname": "Kepler-91",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 6.24658000,
    "pl_masse": 257.44230,
    "sy_dist": 1294.6900000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "KOI-94 e",
    "hostname": "KOI-94",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 54.31996151,
    "pl_masse": null,
    "sy_dist": 477.0520000,
    "releasedate": "2018-09-25"
},
{
    "pl_name": "Kepler-506 b",
    "hostname": "Kepler-506",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 6.88364706,
    "pl_masse": null,
    "sy_dist": 228.4390000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-37 c",
    "hostname": "Kepler-37",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 21.30207100,
    "pl_masse": null,
    "sy_dist": 63.9207000,
    "releasedate": "2015-05-21"
},
{
    "pl_name": "Kepler-6 b",
    "hostname": "Kepler-6",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.23444399,
    "pl_masse": null,
    "sy_dist": 587.0390000,
    "releasedate": "2022-12-18"
},
{
    "pl_name": "Kepler-102 e",
    "hostname": "Kepler-102",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 16.14569077,
    "pl_masse": null,
    "sy_dist": 107.7960000,
    "releasedate": "2016-05-10"
},
{
    "pl_name": "55 Cnc c",
    "hostname": "55 Cnc",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2004,
    "pl_orbper": 44.37300000,
    "pl_masse": 56.69850,
    "sy_dist": 12.5855000,
    "releasedate": "2014-08-21"
},
{
    "pl_name": "WASP-132 c",
    "hostname": "WASP-132",
    "discoverymethod": "Transit",
    "disc_year": 2022,
    "pl_orbper": 1.01153359,
    "pl_masse": null,
    "sy_dist": 122.9100000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "HAT-P-44 b",
    "hostname": "HAT-P-44",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.30119750,
    "pl_masse": null,
    "sy_dist": 347.8500000,
    "releasedate": "2022-09-15"
},
{
    "pl_name": "WASP-170 b",
    "hostname": "WASP-170",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 2.34478022,
    "pl_masse": 508.52800,
    "sy_dist": 305.6030000,
    "releasedate": "2018-12-13"
},
{
    "pl_name": "WASP-182 b",
    "hostname": "WASP-182",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 3.37698480,
    "pl_masse": null,
    "sy_dist": 327.6020000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HATS-28 b",
    "hostname": "HATS-28",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.18107780,
    "pl_masse": null,
    "sy_dist": 535.3830000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-161 b",
    "hostname": "WASP-161",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 5.40604250,
    "pl_masse": 791.39670,
    "sy_dist": 343.0800000,
    "releasedate": "2018-12-13"
},
{
    "pl_name": "WASP-49 b",
    "hostname": "WASP-49",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.78174000,
    "pl_masse": 117.59710,
    "sy_dist": 194.5530000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "TOI-1899 b",
    "hostname": "TOI-1899",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 29.09022715,
    "pl_masse": null,
    "sy_dist": 128.4380000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-4 b",
    "hostname": "WASP-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 1.33823251,
    "pl_masse": 386.48128,
    "sy_dist": 267.2060000,
    "releasedate": "2015-08-27"
},
{
    "pl_name": "HAT-P-25 b",
    "hostname": "HAT-P-25",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.65283600,
    "pl_masse": 180.20961,
    "sy_dist": 300.3840000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-2 b",
    "hostname": "WASP-2",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.15222600,
    "pl_masse": null,
    "sy_dist": 153.2420000,
    "releasedate": "2014-10-29"
},
{
    "pl_name": "WASP-47 d",
    "hostname": "WASP-47",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 9.03079000,
    "pl_masse": 10.40000,
    "sy_dist": 264.7800000,
    "releasedate": "2015-11-19"
},
{
    "pl_name": "Kepler-426 b",
    "hostname": "Kepler-426",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 3.21751859,
    "pl_masse": null,
    "sy_dist": 843.6950000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "WASP-15 b",
    "hostname": "WASP-15",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.75209748,
    "pl_masse": 172.26386,
    "sy_dist": 282.0910000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-29 b",
    "hostname": "WASP-29",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.92272700,
    "pl_masse": 77.54700,
    "sy_dist": 87.5953000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Qatar-5 b",
    "hostname": "Qatar-5",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.87930020,
    "pl_masse": null,
    "sy_dist": 367.6580000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Kepler-43 b",
    "hostname": "Kepler-43",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.02409251,
    "pl_masse": null,
    "sy_dist": 1005.8400000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "DENIS-P J082303.1-491201 b",
    "hostname": "DENIS-P J082303.1-491201",
    "discoverymethod": "Astrometry",
    "disc_year": 2013,
    "pl_orbper": 246.36000000,
    "pl_masse": 9057.77000,
    "sy_dist": null,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "GJ 667 C g",
    "hostname": "GJ 667 C",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 256.20000000,
    "pl_masse": null,
    "sy_dist": 7.2439600,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HAT-P-69 b",
    "hostname": "HAT-P-69",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 4.78695680,
    "pl_masse": null,
    "sy_dist": 341.2630000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-14 b",
    "hostname": "HAT-P-14",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.62764900,
    "pl_masse": 724.65240,
    "sy_dist": 222.6630000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "HAT-P-50 b",
    "hostname": "HAT-P-50",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.12201570,
    "pl_masse": null,
    "sy_dist": 515.4580000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-17 b",
    "hostname": "WASP-17",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": 3.73543000,
    "pl_masse": null,
    "sy_dist": 405.9080000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HAT-P-2 b",
    "hostname": "HAT-P-2",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 5.63347540,
    "pl_masse": 2765.12100,
    "sy_dist": 127.7740000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-2 b",
    "hostname": "WASP-2",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.15217500,
    "pl_masse": 295.89973,
    "sy_dist": 153.2420000,
    "releasedate": "2019-09-26"
},
{
    "pl_name": "XO-4 b",
    "hostname": "XO-4",
    "discoverymethod": "Transit",
    "disc_year": 2008,
    "pl_orbper": 4.12508280,
    "pl_masse": 565.71000,
    "sy_dist": 272.6550000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "55 Cnc b",
    "hostname": "55 Cnc",
    "discoverymethod": "Radial Velocity",
    "disc_year": 1996,
    "pl_orbper": 14.64700000,
    "pl_masse": null,
    "sy_dist": 12.5855000,
    "releasedate": "2014-08-21"
},
{
    "pl_name": "WASP-3 b",
    "hostname": "WASP-3",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": null,
    "pl_masse": 617.86152,
    "sy_dist": 231.1610000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "HAT-P-36 b",
    "hostname": "HAT-P-36",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.32734660,
    "pl_masse": 611.82275,
    "sy_dist": 294.4190000,
    "releasedate": "2019-07-11"
},
{
    "pl_name": "WASP-50 b",
    "hostname": "WASP-50",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.95510000,
    "pl_masse": 466.82870,
    "sy_dist": 184.8480000,
    "releasedate": "2019-07-11"
},
{
    "pl_name": "WASP-58 b",
    "hostname": "WASP-58",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 5.01718000,
    "pl_masse": 308.29510,
    "sy_dist": 290.4040000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "K2-261 b",
    "hostname": "K2-261",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 11.63345410,
    "pl_masse": null,
    "sy_dist": 213.2830000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "XO-6 b",
    "hostname": "XO-6",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.76499160,
    "pl_masse": null,
    "sy_dist": 235.4790000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-159 b",
    "hostname": "WASP-159",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 3.84040100,
    "pl_masse": 174.80650,
    "sy_dist": 715.3830000,
    "releasedate": "2018-10-26"
},
{
    "pl_name": "KELT-11 b",
    "hostname": "KELT-11",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 4.73626000,
    "pl_masse": null,
    "sy_dist": 99.1596000,
    "releasedate": "2018-12-06"
},
{
    "pl_name": "WASP-140 b",
    "hostname": "WASP-140",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 2.23598350,
    "pl_masse": 775.50520,
    "sy_dist": 117.5980000,
    "releasedate": "2016-12-01"
},
{
    "pl_name": "WASP-186 b",
    "hostname": "WASP-186",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 5.02678820,
    "pl_masse": null,
    "sy_dist": 278.5140000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-95 b",
    "hostname": "WASP-95",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.18466880,
    "pl_masse": null,
    "sy_dist": 137.5440000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HATS-63 b",
    "hostname": "HATS-63",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 3.05664540,
    "pl_masse": null,
    "sy_dist": 623.2320000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-4 b",
    "hostname": "WASP-4",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 1.33823162,
    "pl_masse": 371.86110,
    "sy_dist": 267.2060000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "HATS-72 b",
    "hostname": "HATS-72",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 7.32794500,
    "pl_masse": null,
    "sy_dist": 127.5890000,
    "releasedate": "2022-10-03"
},
{
    "pl_name": "WASP-26 b",
    "hostname": "WASP-26",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 2.75659630,
    "pl_masse": null,
    "sy_dist": 252.7590000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HAT-P-26 b",
    "hostname": "HAT-P-26",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 4.23450020,
    "pl_masse": null,
    "sy_dist": 141.8370000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-45 b",
    "hostname": "WASP-45",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 3.12607402,
    "pl_masse": null,
    "sy_dist": 211.1960000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "HAT-P-45 b",
    "hostname": "HAT-P-45",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 3.12899200,
    "pl_masse": 273.33380,
    "sy_dist": 298.6400000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-49 b",
    "hostname": "WASP-49",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.78173786,
    "pl_masse": null,
    "sy_dist": 194.5530000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "HD 189733 b",
    "hostname": "HD 189733",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2005,
    "pl_orbper": 2.21857578,
    "pl_masse": 365.50450,
    "sy_dist": 19.7638000,
    "releasedate": "2016-01-14"
},
{
    "pl_name": "WASP-36 b",
    "hostname": "WASP-36",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 1.53736530,
    "pl_masse": 731.93200,
    "sy_dist": 386.3460000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "WASP-129 b",
    "hostname": "WASP-129",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 5.74814500,
    "pl_masse": 317.83000,
    "sy_dist": 301.4620000,
    "releasedate": "2016-05-05"
},
{
    "pl_name": "WASP-145 A b",
    "hostname": "WASP-145 A",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 1.76903810,
    "pl_masse": 282.86870,
    "sy_dist": 91.2990000,
    "releasedate": "2018-10-26"
},
{
    "pl_name": "XO-7 b",
    "hostname": "XO-7",
    "discoverymethod": "Transit",
    "disc_year": 2019,
    "pl_orbper": 2.86414130,
    "pl_masse": null,
    "sy_dist": 234.1490000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "HATS-30 b",
    "hostname": "HATS-30",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 3.17435160,
    "pl_masse": null,
    "sy_dist": 342.1400000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-127 b",
    "hostname": "WASP-127",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 4.17806200,
    "pl_masse": 57.20940,
    "sy_dist": 159.5070000,
    "releasedate": "2016-12-01"
},
{
    "pl_name": "HD 50554 b",
    "hostname": "HD 50554",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2002,
    "pl_orbper": 1222.80000000,
    "pl_masse": null,
    "sy_dist": 31.1664000,
    "releasedate": "2021-09-20"
},
{
    "pl_name": "HD 65216 c",
    "hostname": "HD 65216",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2013,
    "pl_orbper": 152.60000000,
    "pl_masse": null,
    "sy_dist": 35.1205000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "HD 50499 b",
    "hostname": "HD 50499",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2005,
    "pl_orbper": 2483.70000000,
    "pl_masse": null,
    "sy_dist": 46.2845000,
    "releasedate": "2019-04-11"
},
{
    "pl_name": "DH Tau b",
    "hostname": "DH Tau",
    "discoverymethod": "Imaging",
    "disc_year": 2004,
    "pl_orbper": null,
    "pl_masse": 3496.00000,
    "sy_dist": 134.8460000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "PH2 b",
    "hostname": "PH2",
    "discoverymethod": "Transit",
    "disc_year": 2013,
    "pl_orbper": 282.52550000,
    "pl_masse": null,
    "sy_dist": 343.8630000,
    "releasedate": "2014-05-14"
},
{
    "pl_name": "Kepler-33 c",
    "hostname": "Kepler-33",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 13.17555999,
    "pl_masse": null,
    "sy_dist": 1209.1600000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "Kepler-33 c",
    "hostname": "Kepler-33",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 13.17556672,
    "pl_masse": null,
    "sy_dist": 1209.1600000,
    "releasedate": "2014-11-21"
},
{
    "pl_name": "Kepler-33 d",
    "hostname": "Kepler-33",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 21.77568158,
    "pl_masse": null,
    "sy_dist": 1209.1600000,
    "releasedate": "2017-05-08"
},
{
    "pl_name": "WASP-76 b",
    "hostname": "WASP-76",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 1.80988600,
    "pl_masse": 292.40360,
    "sy_dist": 194.4590000,
    "releasedate": "2016-01-21"
},
{
    "pl_name": "WASP-164 b",
    "hostname": "WASP-164",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 1.77711088,
    "pl_masse": null,
    "sy_dist": 327.5060000,
    "releasedate": "2022-08-09"
},
{
    "pl_name": "HAT-P-37 b",
    "hostname": "HAT-P-37",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.79744140,
    "pl_masse": null,
    "sy_dist": 390.5940000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-47 e",
    "hostname": "WASP-47",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 0.78959700,
    "pl_masse": 22.00000,
    "sy_dist": 264.7800000,
    "releasedate": "2015-10-15"
},
{
    "pl_name": "WASP-167 b",
    "hostname": "WASP-167",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.02195960,
    "pl_masse": 2542.64000,
    "sy_dist": 423.5520000,
    "releasedate": "2017-07-27"
},
{
    "pl_name": "HAT-P-24 b",
    "hostname": "HAT-P-24",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 3.35524000,
    "pl_masse": 238.37250,
    "sy_dist": 415.3440000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "HAT-P-42 b",
    "hostname": "HAT-P-42",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 4.64183680,
    "pl_masse": null,
    "sy_dist": 405.2380000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-98 b",
    "hostname": "WASP-98",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 2.96264020,
    "pl_masse": null,
    "sy_dist": 281.7420000,
    "releasedate": "2022-08-08"
},
{
    "pl_name": "WASP-106 b",
    "hostname": "WASP-106",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 9.28971500,
    "pl_masse": 611.79700,
    "sy_dist": 352.1810000,
    "releasedate": "2014-09-25"
},
{
    "pl_name": "TrES-2 b",
    "hostname": "TrES-2",
    "discoverymethod": "Transit",
    "disc_year": 2006,
    "pl_orbper": 2.47063000,
    "pl_masse": 406.82240,
    "sy_dist": 215.3200000,
    "releasedate": "2016-07-28"
},
{
    "pl_name": "XO-2 N b",
    "hostname": "XO-2 N",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 2.61585978,
    "pl_masse": null,
    "sy_dist": 154.2730000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "WASP-73 b",
    "hostname": "WASP-73",
    "discoverymethod": "Transit",
    "disc_year": 2014,
    "pl_orbper": 4.08728560,
    "pl_masse": null,
    "sy_dist": 316.6780000,
    "releasedate": "2019-08-15"
},
{
    "pl_name": "WASP-17 b",
    "hostname": "WASP-17",
    "discoverymethod": "Transit",
    "disc_year": 2009,
    "pl_orbper": null,
    "pl_masse": null,
    "sy_dist": 405.9080000,
    "releasedate": "2016-10-13"
},
{
    "pl_name": "HD 17156 b",
    "hostname": "HD 17156",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2007,
    "pl_orbper": 21.21639790,
    "pl_masse": 1014.15300,
    "sy_dist": 78.0863000,
    "releasedate": "2014-10-29"
},
{
    "pl_name": "WASP-186 b",
    "hostname": "WASP-186",
    "discoverymethod": "Transit",
    "disc_year": 2020,
    "pl_orbper": 5.02679920,
    "pl_masse": null,
    "sy_dist": 278.5140000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-44 b",
    "hostname": "WASP-44",
    "discoverymethod": "Transit",
    "disc_year": 2011,
    "pl_orbper": 2.42381200,
    "pl_masse": 275.55861,
    "sy_dist": 364.5120000,
    "releasedate": "2016-03-31"
},
{
    "pl_name": "WASP-167 b",
    "hostname": "WASP-167",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 2.02195700,
    "pl_masse": null,
    "sy_dist": 423.5520000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "HATS-22 b",
    "hostname": "HATS-22",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 4.72281583,
    "pl_masse": null,
    "sy_dist": 229.5180000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-121 b",
    "hostname": "WASP-121",
    "discoverymethod": "Transit",
    "disc_year": 2016,
    "pl_orbper": 1.27492477,
    "pl_masse": null,
    "sy_dist": 269.8980000,
    "releasedate": "2022-01-24"
},
{
    "pl_name": "Qatar-6 b",
    "hostname": "Qatar-6",
    "discoverymethod": "Transit",
    "disc_year": 2017,
    "pl_orbper": 3.50619500,
    "pl_masse": 212.31044,
    "sy_dist": 100.8480000,
    "releasedate": "2019-11-21"
},
{
    "pl_name": "KPS-1 b",
    "hostname": "KPS-1",
    "discoverymethod": "Transit",
    "disc_year": 2018,
    "pl_orbper": 1.70630400,
    "pl_masse": null,
    "sy_dist": 262.7060000,
    "releasedate": "2022-05-03"
},
{
    "pl_name": "WASP-49 b",
    "hostname": "WASP-49",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 2.78173870,
    "pl_masse": 126.81417,
    "sy_dist": 194.5530000,
    "releasedate": "2019-03-21"
},
{
    "pl_name": "WASP-61 b",
    "hostname": "WASP-61",
    "discoverymethod": "Transit",
    "disc_year": 2012,
    "pl_orbper": 3.85590000,
    "pl_masse": 851.78440,
    "sy_dist": 488.6600000,
    "releasedate": "2018-04-26"
},
{
    "pl_name": "HATS-6 b",
    "hostname": "HATS-6",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 3.32526423,
    "pl_masse": null,
    "sy_dist": 169.3180000,
    "releasedate": "2022-10-18"
},
{
    "pl_name": "WASP-82 b",
    "hostname": "WASP-82",
    "discoverymethod": "Transit",
    "disc_year": 2015,
    "pl_orbper": 2.70578200,
    "pl_masse": 394.10920,
    "sy_dist": 275.6640000,
    "releasedate": "2016-01-21"
},
{
    "pl_name": "WASP-3 b",
    "hostname": "WASP-3",
    "discoverymethod": "Transit",
    "disc_year": 2007,
    "pl_orbper": 1.84683500,
    "pl_masse": 654.72980,
    "sy_dist": 231.1610000,
    "releasedate": "2016-01-14"
}
]

  constructor(private httpClient: HttpClient) { }


  headers = new HttpHeaders()
            .append('Access-Control-Allow-Origin', '*')
            .append('Referrer-Policy', 'strict-origin-when-cross-origin');

  getQuery(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${this.queryAPI}`, { headers: this.headers });
  }

  getArray(){
    return this.exoplanetsArray;
  }
}
