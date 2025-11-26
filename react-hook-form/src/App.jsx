
import { useForm } from "react-hook-form"


const App = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  console.log(errors)
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>

      <label htmlFor="nombre">Nombre</label>
      <input type="text" {...register("nombre", { required: true, minLength: 2, maxLength: 20 })} />
      {
        errors.nombre?.type === "required" && <span>Error  en el nombre</span>
      }
      {
        errors.nombre?.type === "minLength" && <span>Error  en el nombre, demasiado corto</span>
      }

      <label htmlFor="correo">correo electronico</label>
      <input type="email" {...register("correo", { required: true })} />

      {
        errors.correo && <span>Error  en el correo</span>
      }

      <label htmlFor="password">contraseña:</label>
      <input type="password" {...register("password", { required: true })} />

      <label htmlFor="Confirmarpassword">confirmar contraseña</label>
      <input type="password" {...register("Confirmarpassword", {

        required:{
          value:true,
          message:"la confirmacion de la contraseña es obligatoria"
        },
        validate: (value)=>{
          if(value=== watch("password")){
            return true;
          }else{
            return "las contraseñas no coinciden"
          }
        }


      })} />



      <label htmlFor="fechaNacimiento">fecha de nacimiento</label>
      <input type="date" {...register("fechaNacimiento",
        {
          required: {
            value: true,
            message: "la fecha de nacimiento es obligatoria"
          },

          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();

            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            console.log(edad)
            return edad >= 18 || "debes ser mayor de edad"
          }
        }



      )} />

      <label htmlFor="pais">pais</label>
      <select {...register("pais")}>
        <option value="co" >colombia</option>
        <option value="ar" >argentina</option>
        <option value="pe" >peru</option>
        <option value="uy" >uruguay</option>
        <option value="bo" >bolivia</option>
      </select>

      <input type="checkbox" />
      <label htmlFor="terminos" {...register("terminos", { required: true })} >Aceptar termino y condiciones</label>

      <button type="submit" >Enviar</button>

      <pre>
        {
          JSON.stringify(watch(), null, 2)
        }
      </pre>

    </form>
  )
}

export default App
