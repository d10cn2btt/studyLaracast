<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="{{ url('favicon.ico') }}">

    <title>Blog Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="{{ url('/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{{ url('/css/admin_template.css') }}" rel="stylesheet">
</head>

<body>

@include('partials.layouts.nav_top')

<div class="blog-header">
    <div class="container">
        <h1 class="blog-title">The Bootstrap Blog</h1>
        <p class="lead blog-description">An example blog template built with Bootstrap.</p>
    </div>
</div>

<div class="container">

    <div class="row">

        <div class="col-sm-12 blog-main">
            @yield('main_content')
        </div><!-- /.blog-main -->

    </div><!-- /.row -->

</div><!-- /.container -->

@include('partials.layouts.footer')
</body>
</html>
