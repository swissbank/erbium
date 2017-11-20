@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Transport
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($transport, ['route' => ['transports.update', $transport->id], 'method' => 'patch']) !!}

                        @include('transports.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection