<script>
    import { Heading, Button, Popover, Fileupload, Helper } from 'flowbite-svelte';
    import { CartSolid } from 'flowbite-svelte-icons';
    const Datos = {
        numTelf: '+58 424-1234567',
        id: 'V-12.345.678',
        banco: 'Banco'
    }

</script>

<div class="text-center flex flex-col gap-8">
    <Heading class='text-[#0766AD]'>Saldo</Heading>
    <Heading>122 B$</Heading>
    <Button id='arrow'>
        <CartSolid class="w-5 h-5 me-2" /> Recarga
    </Button>
    <Popover arrow={true} class="w-64 text-sm font-light" title="Pago Móvil" triggeredBy="#arrow">{Datos.numTelf}<br>{Datos.id}<br>{Datos.banco}</Popover>
    <Fileupload id="with_helper" class="mb-2" />
    <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</div>