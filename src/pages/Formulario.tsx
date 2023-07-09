import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';

const Validation = yup.object({
    titulo: yup
        .string()
        .required('El titulo es requerido'),
    autor: yup
        .string()
        .required('El autor es requerido'),
    genero: yup
        .string()
        .required('El genero es requerido'),
    fecha: yup
        .string()
        .required('La fecha de publicacion es requerida'),
});

const Formulario = () => {
    const formik = useFormik({
        initialValues:{
            titulo: '',
            autor: '',
            genero: '',
            fecha: '',
        },
        validationSchema: Validation,
        onSubmit: (values) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            }, 400);
        }
    });

    return (
        <div>
            <center>
                <h1>Registrar nueva cuenta</h1>
                <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-10">
                    <TextField fullWidth id='titulo' name='titulo' label='Titulo'
                        className="mt-5"
                        value={formik.values.titulo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.titulo && Boolean(formik.errors.titulo)}
                        helperText={formik.touched.titulo && formik.errors.titulo}
                    />
                    <TextField fullWidth id='autor' name='autor' label='autor'
                        className="mt-5"
                        value={formik.values.autor}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.autor && Boolean(formik.errors.autor)}
                        helperText={formik.touched.autor && formik.errors.autor}
                    />  
                    <TextField fullWidth id='genero' name='genero' label='genero'
                        className="mt-5"
                        value={formik.values.genero}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.genero && Boolean(formik.errors.genero)}
                        helperText={formik.touched.genero && formik.errors.genero}
                    />
                    <TextField fullWidth id='fecha' name='fecha' label='fecha'
                        className="mt-5"
                        value={formik.values.fecha}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fecha && Boolean(formik.errors.fecha)}
                        helperText={formik.touched.fecha && formik.errors.fecha}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Registrar
                    </Button>
                </form>

            </center>
        </div>
    );
};

export default Formulario;