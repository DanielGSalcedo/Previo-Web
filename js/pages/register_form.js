let register_form;
export default register_form = `<div class="registerContainer" id="register">

    <div class="register">

        <h2>Add New Student</h2>
        <form id="form_register" action="#" class="registerForm">
            <div class="div_register_input">
                <div class="div_left">
                    <label for="new_student_name">Full name*</label>
                    <input id="new_student_name" type="text" placeholder="Jesus Perez">
                    <label for="new_student_code">Student Code (ID)*</label>
                    <input id="new_student_code" type="text" placeholder="1234">
                    <label for="new_student_email">Email</label>
                    <input id="new_student_email" type="email" placeholder="jesusperez@gmail.com">
                </div>
                <div class="div_right">
                    <label for="new_student_githubLink">Fecha Nacimiento</label>
                    <input id="new_student_githubLink" type="date"  placeholder="2005-04-27">
                     <label for="new_student_direccion"> Direccion</label>
                     <input id="new_student_direccion" type="text" placeholder="https://photo.com/jesusperez.jpg">
                    <label for="new_student_phone">Telefono</label>
                    <input id="new_student_phone" type="text" placeholder="123456789">
                </div>  
            </div>
            <div class="div_button_register">
                <input id="bnt_register" class="button button_login " type="button" value="Register">
            </div>

        </form>
        <button class="button goBackBtn " id="goBack">Go back</button>
    </div>
</div>`;