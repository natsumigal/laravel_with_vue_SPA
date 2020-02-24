<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="csrf-token" content="{{ csrf_token() }}" />

<title>SPA vue</title>

<!-- Favicon -->
{{-- <link rel="shortcut icon" href="{{ asset('/images/favicon.ico') }}"> --}}

<!-- Style and design is under css folder -->
<link href="{{ asset('/css/bootstrap.min.css') }}" rel="stylesheet">
<link href="{{ asset('/css/bootstrap-reboot.css') }}" rel="stylesheet">
<link href="{{ asset('/css/bootstrap-reboot.min.css') }}" rel="stylesheet">
<link href="{{ asset('/css/bootstrap-grid.css') }}" rel="stylesheet">
<link href="{{ asset('/css/bootstrap-grid.min.css') }}" rel="stylesheet">
<link href="{{ asset('/css/style.css') }}" rel="stylesheet">
<link href="{{ asset('/font-awesome/css/fontawesome.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ asset('/fonts/font-awesome.min.css') }}" rel="stylesheet">
<link href="{{ asset('fonts/icon-font.min.css') }}" rel="stylesheet">

@section('css')

@show
