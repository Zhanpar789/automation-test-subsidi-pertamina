Feature: Catat Penjualan Feature


Background: 
    Given User at Merchant App

  Scenario Outline: User Melakukan Catat Penjualan "<Pelanggan>"
   When User click Catat Penjualan button
   * User input KTP Pelanggan to "<Pelanggan>"
   * User click Lanjutkan Penjualan button
   * User click Check Pesanan button
   * User click Proses Penjualan button
   Then User Berhasil Mencatat Penjualan

Examples:
    | Pelanggan        |
    | 3204140306830002 |
    | 3204144201810001 |
    | 3204144304070002 |
    | 3204110108530005 |
    | 3204112703820007 |
    | 3204116612830012 |
    | 3204114501050002 |
    | 3204112702850002 |
    | 3204115303840003 |
    | 3204114703610006 |
    | 3204111602050001 |
    | 3204113108750001 |
    | 3204114303740002 |
    | 3204112706850003 |
    | 3204116411870004 |
    | 3204111502030008 |
    | 3204112009820013 |
    | 3204115307850003 |
    | 3204111502730003 |
    | 3204116503990002 |
    | 3204115712050003 |
    | 3204112004790003 |
    | 3204112510820004 |

