<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('layouts.head')
</head>

<body>
    <div id="app" >
        <app></app>
    </div>
    @include('layouts.footer')
</body>

</html>
