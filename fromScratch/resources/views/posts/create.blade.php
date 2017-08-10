@extends('partials.layouts.blank')
@section('main_content')
    <h2>Create a Post</h2>
    {!! Form::open(['url' => route('post.store'), 'id' => 'form_create_post']) !!}
    @include('partials.posts.form_create')
    {!! Form::close() !!}
@endsection