import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

function Cadastro() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup
      .string()
      .required("senha obrigatória")
      .min(8, "mínimo 8 caracteres")
      .max(15, "máximo 15 caracteres")
      .matches(
        "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@!#])",
        "Sua senha deve conter: *Uma letra maiúscula; * Uma letra minúscula; *Um número; *Um caracter especial "
      ),

    confirmar_senha: yup
      .string()
      .required("Confirmação de senha obrigatória")
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
        <div className="input">
          <input placeholder="Nome" {...register("name")} />
          {errors.name && <span className="msg">{errors.name.message}</span>}
        </div>
        <div className="input">
          <input placeholder="email" {...register("email")} />

          {errors.email && <span className="msg">{errors.email.message}</span>}
        </div>
        <div className="input">
          <input placeholder="senha" type="password" {...register("senha")} />
          {errors.senha && <span className="msg">{errors.senha.message}</span>}
        </div>
        <div className="input">
          <input
            placeholder="confirmar senha"
            type="password"
            {...register("confirmar_senha")}
          />
          {errors.confirmar_senha && (
            <span className="msg">{errors.confirmar_senha.message}</span>
          )}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default Cadastro;
