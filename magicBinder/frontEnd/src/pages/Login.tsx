export const Login = () => {
  return(
    <div>
      <section>
        <h1>Welcome to the Magic Binder</h1>
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
