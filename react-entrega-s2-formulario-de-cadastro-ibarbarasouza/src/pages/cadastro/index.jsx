import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

function Cadastro() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().required("email obrigatório").email("email inválido"),
    senha: yup
      .string()
      .required("senha obrigatória")
      .min(8, "mínimo 8 caracteres")
      .max(15, "máximo 15 caracteres")
      .matches("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@!#])", "senha fraca"),

    confirmar_senha: yup
      .string()
      .required("senha obrigatória")
      .oneOf([yup.ref("senha")], "senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => history.push(`/welcome/${data.name}`);
  console.log(errors);
  return (
    <div className="container-form">
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")} />
        {errors.name && errors.name.message}
        <input placeholder="email" {...register("email")} />
        {errors.email && errors.email.message}
        <input placeholder="senha" type="password" {...register("senha")} />
        {errors.senha && errors.senha.message}
        <input
          placeholder="confirmar senha"
          type="password"
          {...register("confirmar_senha")}
        />
        {errors.confirmar_senha && errors.confirmar_senha.message}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default Cadastro;
