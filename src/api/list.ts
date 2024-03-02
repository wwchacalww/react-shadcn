type StudentProps = {
  id: string
  Name: string
  birth_day: string
  gender: string
  anne: string
  note: string
  ieducar: number,
  educa_df?: string | null
  classroom?: string | null
  status: boolean,
  address?: string | null
  city?: string | null
  cep?: string | null
  fones?: string | null
  cpf?: string | null
  Parents?: string | null
  created_at?: string | null
  updated_at?: string | null
}
export type ClassroomProps = {
  id: string
  Name: string
  level: string
  grade: string
  shift: "matutino" | "vespertino" | "noturno"
  description ?: string | null
  ANNE: string
  year: string
  status: boolean
  students: StudentProps[]
}

export type StudentDTO = {
  id: string
  ieducar: number
  name: string
  anne: string
  birth_day: string
  classroom: string
  shift: "matutino" | "vespertino" | "noturno"
}

const classroom: ClassroomProps = {
	"id": "197bce21-3b35-4216-a740-6d37aeb2d13b",
	"Name": "1º ano A - Vespertino",
	"level": "1º ano",
	"grade": " Ensino Médio",
	"shift": "vespertino",
	"description": "",
	"ANNE": "0 alunos",
	"year": "2023",
	"status": true,
	"students": [
		{
			"id": "87c2b31a-f068-49cc-a511-906973237fff",
			"Name": " AMINTAS DA SILVA COSTA JUNIOR ",
			"birth_day": "2008-03-18T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 1052100,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 112 CONJUNTO 5 LOTE 10 CASA 04 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.302-405",
			"fones": "(61) 994032341,(61) 984833014,(61) 984833014 ",
			"cpf": "073.651.135-02 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.871844Z",
			"updated_at": "2023-10-26T19:16:05.871844Z"
		},
		{
			"id": "5cb926b2-2602-4cc8-9a93-af328bb67a2a",
			"Name": " ANA CLARA MARTINS GONCALVES DOS ",
			"birth_day": "2008-03-05T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 104722,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 506 CONJUNTO 3 LOTE 09 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.312-103",
			"fones": "(61) 33587932,(61) 992477611,(61) 985189100 ",
			"cpf": "098.875.001-51 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.885203Z",
			"updated_at": "2023-10-26T19:16:05.885203Z"
		},
		{
			"id": "39001bdf-0a96-43d7-b579-1edb368db5ff",
			"Name": " ANA LUIZA RAMOS DIAS ",
			"birth_day": "2007-11-26T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 1051688,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 320 CONJUNTO 2 CASA 28 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.310-102",
			"fones": "(67) 992657843,(61) 994328143 ",
			"cpf": "095.164.481-51 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.898375Z",
			"updated_at": "2023-10-26T19:16:05.898375Z"
		},
		{
			"id": "6226e19e-dbbe-47f8-9160-a1f2fd207d11",
			"Name": " ANGELO GABRIEL DOS SANTOS ",
			"birth_day": "2005-01-07T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 100208,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "SGAN 607/Qr 408 conj. 21 casa 03 Samambaia Norte ",
			"city": "Asa Norte/DF",
			"cep": "70.830-300",
			"fones": "(61) 85290946",
			"cpf": "087.054.241-94 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.908173Z",
			"updated_at": "2023-10-26T19:16:05.908173Z"
		},
		{
			"id": "0ef6d760-89e1-4bb0-aa50-dabe800c714f",
			"Name": " BRUNA MARQUES OLIVEIRA ",
			"birth_day": "2008-03-01T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 140604,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 307 CONJUNTO 1 casa 15 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.305-601",
			"fones": "(61) 996018564,(61) 9995431271,(61) 9995431271 ",
			"cpf": "086.781.751-84 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.919541Z",
			"updated_at": "2023-10-26T19:16:05.919541Z"
		},
		{
			"id": "d947069b-b985-49ae-8cef-f5615d298b9f",
			"Name": " CARLOS DANIEL VIEIRA GOMES ",
			"birth_day": "2007-12-16T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 610254,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 502 CONJUNTO 1 LOTE 23 AP 03 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.310-401",
			"fones": "(61) 39643616,(61) 981723597,(61) 993096785 ",
			"cpf": "093.523.431-40 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.930241Z",
			"updated_at": "2023-10-26T19:16:05.930241Z"
		},
		{
			"id": "486c7798-784f-415c-b2ec-12b55e378033",
			"Name": " EMANUELLE MENDONCA ALVES ",
			"birth_day": "2007-12-29T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 100451,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 306 CONJUNTO 2 LOTE 14 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.306-302",
			"fones": "(61) 993139143,(61) 981097425,(61) 985895043 ",
			"cpf": "087.027.631-09 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.947818Z",
			"updated_at": "2023-10-26T19:16:05.947818Z"
		},
		{
			"id": "fbb186ab-1ef9-413f-aa03-8d765acb3ce9",
			"Name": " EVERTON VINICIUS CARVALHO DOS ",
			"birth_day": "2007-10-26T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 104742,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 502 CONJUNTO 17 CASA 23 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.310-417",
			"fones": "(61) 34582699,(61) 985972051,(61) 993509171 ",
			"cpf": "096.498.291-99 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.972561Z",
			"updated_at": "2023-10-26T19:16:05.972561Z"
		},
		{
			"id": "7cf11b62-72e9-4c08-befe-35a3f2b39dd3",
			"Name": " GABRIELLE OLIVEIRA DE SOUSA ",
			"birth_day": "2007-11-29T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 104744,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 508 CONJUNTO 2 CASA 15 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.312-302",
			"fones": "(61) 30217017,(61) 986563564,(61) 981325647 ",
			"cpf": "090.807.071-39 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:05.99422Z",
			"updated_at": "2023-10-26T19:16:05.99422Z"
		},
		{
			"id": "0f3c5499-12bc-48ba-b663-5f510e7e8013",
			"Name": " GUILHERME BATISTA MIRANDA ",
			"birth_day": "2007-03-19T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 475931,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 516 CONJUNTO 4 CASA 02 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.314-304",
			"fones": "(61) 41028030,(61) 985010200 ",
			"cpf": "103.176.421-62 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.01486Z",
			"updated_at": "2023-10-26T19:16:06.01486Z"
		},
		{
			"id": "0f49037a-12d8-4ac2-9cad-01df23d86386",
			"Name": " GUSTAVO OLIVEIRA FARIAS ",
			"birth_day": "2008-02-29T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 100454,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 306 CONJUNTO 2 CASA 13 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.306-302",
			"fones": "(61) 98417429,(61) 30411555,(61) 33270538 ",
			"cpf": "042.046.911-70 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.034962Z",
			"updated_at": "2023-10-26T19:16:06.034962Z"
		},
		{
			"id": "9b611a8c-fd4f-450d-a918-bc0d55a798a0",
			"Name": " HENRIQUE SOARES ARBUES ",
			"birth_day": "2007-11-10T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 946770,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 122 CONJUNTO 1 CASA 05 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.304-201",
			"fones": "(61) 30326167,(61) 981769026,(61) 993074299 ",
			"cpf": "060.232.421-11 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.052374Z",
			"updated_at": "2023-10-26T19:16:06.052374Z"
		},
		{
			"id": "6fdf49e1-dbdf-423d-9276-3fdea6f18bc8",
			"Name": " INGRIDY VITORIA DOS SANTOS ",
			"birth_day": "2007-09-06T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 58118,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 315 CONJUNTO 8/C.42 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.307-608",
			"fones": "(61) 34596664,(61) 983279131,(61) 983279118 ",
			"cpf": "098.140.121-06 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.063102Z",
			"updated_at": "2023-10-26T19:16:06.063102Z"
		},
		{
			"id": "c7650fe8-026e-424c-b75a-539ba7be4486",
			"Name": " JOAO MIGUEL GONCALVES DA SILVA ",
			"birth_day": "2007-11-21T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 104764,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QN 514 CONJUNTO 2 LOTE 01 CASA 05 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.314-002",
			"fones": "(61) 32243317,(61) 999015801,(61) 33927225 ",
			"cpf": "093.121.281-24 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.073592Z",
			"updated_at": "2023-10-26T19:16:06.073592Z"
		},
		{
			"id": "989e2224-2245-4d66-b544-78273a7971c9",
			"Name": " LARYSSA BRENDA BRAZ DOS SANTOS ",
			"birth_day": "2008-03-23T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 437529,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QN 508 CONJUNTO 3 CASA 02 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.312-203",
			"fones": "(61) 33582043,(61) 986520104,(61) 986561211 ",
			"cpf": "088.391.441-70 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.086484Z",
			"updated_at": "2023-10-26T19:16:06.086485Z"
		},
		{
			"id": "fdce1fdf-ce53-4b12-b3cc-57ab681507e6",
			"Name": " LEONARDO VIEIRA FERNANDES ",
			"birth_day": "2008-01-21T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 659467,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 304 CONJUNTO 5 Casa 05 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.306-105",
			"fones": "(61) 985270193,(61) 985270193,(34) 997891766 ",
			"cpf": "141.489.446-59 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.097061Z",
			"updated_at": "2023-10-26T19:16:06.097061Z"
		},
		{
			"id": "a1173662-b519-4d78-8c90-4bf12022d967",
			"Name": " LUCAS VINICIUS RODRIGUES DA SILVA ",
			"birth_day": "2006-04-13T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 885655,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QUADRA 202 CONJUNTO 2 Lote 14 - Bloco A - APT. 206 BOULEVARD DAS PALMEIRAS ",
			"city": "Samambaia Norte (Samambaia)-DF",
			"cep": "72.316-042",
			"fones": "(61) 986547354,(61) 994240540,(61) 984227550 ",
			"cpf": "092.688.311-98 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.106752Z",
			"updated_at": "2023-10-26T19:16:06.106752Z"
		},
		{
			"id": "40e21006-f22b-4dfb-a079-229c1b077d77",
			"Name": " MARIA EDUARDA GOMES DE ALMEIDA ",
			"birth_day": "2007-09-24T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 232265,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 314 CONJUNTO 7 Lote 02 Casa 01 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.308-308",
			"fones": "(61) 993324448,(61) 994324707 ",
			"cpf": "057.707.291-98 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.123303Z",
			"updated_at": "2023-10-26T19:16:06.123303Z"
		},
		{
			"id": "e0d3475c-fc39-4c18-9fcb-ef666adf2e6b",
			"Name": " MARINA LIMA DA SILVA ",
			"birth_day": "2008-02-09T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 660875,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 506 CONJUNTO 1 CASA 10 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.312-101",
			"fones": "(61) 33574988,(61) 3331843,(61) 992224818 ",
			"cpf": "080.469.061-82 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.143047Z",
			"updated_at": "2023-10-26T19:16:06.143047Z"
		},
		{
			"id": "bd32d677-db44-4e3a-a986-b22b690381ed",
			"Name": " MARYANE OLIVEIRA MEIRELES ",
			"birth_day": "2008-04-13T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 384079,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 110 CONJUNTO 12 LOTE 15 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.302-312",
			"fones": "(61) 34911207,(61) 996859705,(61) 991334248 ",
			"cpf": "097.989.771-81 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.162914Z",
			"updated_at": "2023-10-26T19:16:06.162914Z"
		},
		{
			"id": "377cc844-c6e6-4a1d-b123-1c2dd8a355d8",
			"Name": " MAYCON ANDERSON SOUSA MONTEIRO ",
			"birth_day": "2007-06-25T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 1126724,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "ADE CONJUNTO 3 lote 01 aptº 104 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.314-703",
			"fones": "(61) 985603392,(61) 998438822 ",
			"cpf": "628.228.863-00 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.182347Z",
			"updated_at": "2023-10-26T19:16:06.182347Z"
		},
		{
			"id": "0a1b6b87-cca5-4e97-879c-35ae1d3a65ce",
			"Name": " PEDRO ARTUR SILVA DE SOUSA ",
			"birth_day": "2007-08-20T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 100478,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 110 CONJUNTO 17 lote 14 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.302-317",
			"fones": "(61) 992066792,(61) 986542200 ",
			"cpf": "625.355.423-90 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.202341Z",
			"updated_at": "2023-10-26T19:16:06.202341Z"
		},
		{
			"id": "c9313432-83e9-4636-91e3-95495ede3aac",
			"Name": " RAPHAEL VIANA MENDES ",
			"birth_day": "2007-11-22T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 105019,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 506 CONJUNTO 3 LOTE14 casa 02 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.312-103",
			"fones": "(61) 33581983,(61) 985737969,(61) 991091978 ",
			"cpf": "67149a95-f734-4575-aad5-8028a8da1c4e",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.221152Z",
			"updated_at": "2023-10-26T19:16:06.221152Z"
		},
		{
			"id": "a45f0284-0029-43b3-b3f6-0701768ddff1",
			"Name": " RUTH VITORIA PANTOJA GOMES ",
			"birth_day": "2007-09-02T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 379786,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QN 106 CONJUNTO 1 BLOCO E ENT. A AO 201 LOTE 01 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.302-151",
			"fones": "(61) 984419603,(61) 984033930,(61) 984033930 ",
			"cpf": "085.792.601-24 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.234381Z",
			"updated_at": "2023-10-26T19:16:06.234381Z"
		},
		{
			"id": "f2690c50-b56b-4ae7-a210-e9f8f666d8f2",
			"Name": " SAMARA BEATRIZ GARCIA CALDAS ",
			"birth_day": "2007-06-08T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 660908,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QN 118 CONJUNTO 1 lote 01 BL l ap 204 vila real ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.302-851",
			"fones": "(61) 981268615,(61) 992635622 ",
			"cpf": "077.209.531-00 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.243488Z",
			"updated_at": "2023-10-26T19:16:06.243488Z"
		},
		{
			"id": "35c7e822-bfe3-469f-a247-421daeca3316",
			"Name": " THALYTOM BRUNO ELVAS SANTOS ",
			"birth_day": "2007-09-20T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 433131,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 109 CONJUNTO 1 lote 16 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.301-301",
			"fones": "(61) 992109525,(61) 992639478,(61) 992639478 ",
			"cpf": "711.126.601-35 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.254149Z",
			"updated_at": "2023-10-26T19:16:06.254149Z"
		},
		{
			"id": "6e3a453c-8ac8-4f7c-8734-d6d553a5cf1a",
			"Name": " THAUANY FRANCA CAMPOS DA SILVA ",
			"birth_day": "2008-02-10T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 100282,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 104 CONJUNTO 7 CASA 07 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.302-007",
			"fones": "(61) 991660138,(61) 981549842 ",
			"cpf": "055.790.481-14 ",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.264168Z",
			"updated_at": "2023-10-26T19:16:06.264168Z"
		},
		{
			"id": "a3c70086-c6f6-47ba-a4cc-430bfb48f13c",
			"Name": " VITORIA RODRIGUES FAGUNDES ",
			"birth_day": "2007-04-28T12:15:05Z",
			"gender": "",
			"anne": "",
			"note": "",
			"ieducar": 126791,
			"educa_df": "",
			"classroom": null,
			"status": true,
			"address": "QR 305 CONJUNTO 11 CASA 01 ",
			"city": "Samambaia Sul (Samambaia)-DF",
			"cep": "72.305-312",
			"fones": "(61) 991482738,(61) 93288497,(61) 994128541 ",
			"cpf": "076.995.821-44",
			"Parents": null,
			"created_at": "2023-10-26T19:16:06.273782Z",
			"updated_at": "2023-10-26T19:16:06.273782Z"
		}
	],
}

export const Students: StudentDTO[] = classroom.students.map( std => {
  const date = new Date(std.birth_day)
  const formatted = new Intl.DateTimeFormat("pt-BR").format(date)

  return {
    id: std.id,
    ieducar: std.ieducar,
    name: std.Name,
    anne: std.anne,
    birth_day: formatted,
    classroom: classroom.Name,
    shift: classroom.shift,
  }
})

export async function GetStudents() {
	const token = localStorage.getItem("@Hakuna:token")
		const response = await fetch("http://localhost:9000/classrooms/list?year=2023", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	if(response.status === 401) {
		const refresh_token = localStorage.getItem("@Hakuna:refresh_token")
		const data = { refresh_token}
		const result = await fetch("http://localhost:9000/auth/refresh_token", {
			method: "post",
			body: JSON.stringify(data),
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		console.log(result)
		return []
	}
	const data: ClassroomProps[] = await response.json()

	const test:StudentDTO[] = []
  data?.forEach(cls => {
    if(cls.students !== null) {
      cls.students.forEach(std => {
        const date = new Date(std.birth_day)
        const formatted = new Intl.DateTimeFormat("pt-BR").format(date)
        test.push({
          id: std.id,
          ieducar: std.ieducar,
          name: std.Name,
          classroom: cls.Name,
          anne: std.anne, 
          shift: cls.shift,
          birth_day: formatted,
        })
      })
    }
  })

	return test
	
}