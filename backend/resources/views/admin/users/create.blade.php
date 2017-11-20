@extends('admin.layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            User
        </h1>
    </section>
    <div class="content">
        @include('adminlte-templates::common.errors')
        <div class="box box-primary">

            <div class="box-body">
                <div class="row">
                    {!! Form::open(['route' => 'admin.users.store']) !!}

                        @include('admin.users.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
