<?php
$excelFile = 'leaguecontent.xlsx';
$sheetName = 'Calendar';
$cell = 'A2';

// Excel-Datei öffnen
$excel = new COM("Excel.Application") or die("Excel-Objekt konnte nicht erstellt werden");
$workbook = $excel->Workbooks->Open(realpath($'leaguecontent.xlsx')) or die("Die Datei konnte nicht geöffnet werden");

// Arbeitsblatt auswählen
$worksheet = $workbook->Worksheets($Calendar);

// Zellenwert auslesen
$cellValue = $worksheet->Range($A2)->Value($A17);

// Excel-Objekt freigeben
$workbook->Close(false);
$excel->Quit();
$excel = null;

// Zellenwert ausgeben
echo $cellValue;
?>
