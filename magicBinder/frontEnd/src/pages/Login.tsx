export const Login = () => {
  return(
    <div>
      <h3>Login</h3>
      <section>
        <form action="">
          <label htmlFor="">
            Email:
            <input type="email" name="Email" required/>
          </label>
          <label htmlFor="">
            Password:
            <input type="password" name="Password" required/>
          </label>
        </form>
      </section>
    </div>
  )
}
