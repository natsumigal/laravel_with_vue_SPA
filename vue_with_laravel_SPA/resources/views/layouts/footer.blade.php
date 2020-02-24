<script src="{{ asset('/js/jquery.min.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ asset('/js/popper.min.js') }}"></script>
<script src="{{ asset('/js/moment.min.js') }}"></script>
<script src="{{ asset('/js/detect.js') }}"></script>
<script src="{{ asset('/js/fastclick.js') }}"></script>
<script src="{{ asset('/js/jquery.blockUI.js') }}"></script>
<script src="{{ asset('/js/jquery.nicescroll.js') }}"></script>
<script src="{{ asset('/js/tilt.jquery.min.js') }}"></script>

<script src="{{ asset('/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('/js/bootstrap.js') }}"></script>
<script src="{{ asset('/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('/js/bootstrap.bundle.js') }}"></script>
<!-- App js -->
<script src="{{ asset('/js/style.js') }}"></script>
<script src="{{ asset('/js/main.js') }}"></script>

<script src="{{ asset('/js/animsition.min.js') }}"></script>
<script src="{{ asset('/js/popper.js') }}"></script>
<script src="{{ asset('/js/select2.min.js') }}"></script>



<script>
    $(document).ready(function() {
        moment.locale('ja');

        $('.js-tilt').tilt({
			scale: 1.1
		});
    } );
</script>


@section('js')
@show
<!-- END Java Script for this page -->
