let overview_page;
export default overview_page = `
<div class="overview">
    <div>
    <button id="goBack_home" class="button"><span class="material-symbols-outlined">arrow_back</span></button>
    </div>
    <div class="div_info">
        <div class="div_profile" >
                <h3> Student Information</h3> 
                <div class="div_profile_basic_info">
            <div class="div_profile_top">
                 <img id="img_perfil_overview" src="https://avatars.githubusercontent.com/u/1791598?v=4" alt="" class="img_profile_overview">
                 </div>
                 
                 <div class="div_profile_bottom">
                 <h2>Nombre</h2>
                 <p>ID:<span id="span_overview_code">1234</span></p>
                 <div>
                 
                 <span class="material-symbols-outlined">mail</span>Email:<p><p id="span_overview_email">youremail@gmail.com<></p> 
                </div>
                <div>
                    <span class="material-symbols-outlined">phone</span>Telefono: <p><p id="span_overview_phone"></p> 
                </div>
                <div>
                    <span class="material-symbols-outlined">today</span>Fecha de Nacimiento: <p><p id="span_overview_datebn"></p> 
                </div>
                 <div>
                    <span class="material-symbols-outlined">location_on</span>Dirección: <p><p id="span_overview_direccion"></p> 
                </div>
                
                </div>
                
               
             </div>
                 <button id="btn_edit_overview" class="button"><span class="material-symbols-outlined">edit</span>Edit Profile</button>
        </div>
        <div class="div_technologies"> 
            <h2>Technologies</h2>
            <div class="div_technologies_top">
                 <p>Skills and technologies this student has mastered</p>
                <button class="button"><span class="material-symbols-outlined">add</span> Add Technology</button>
            </div>
            <div class="div_technologies_bottom">
                   <div class="table_technologies_container">
                        <div class="table_technologies">
                            <div class="header_technologies">technologies</div>
                            <div class="header_technologies_end">level</div>
                            <div class="header_technologies"></div>
                            
                            <div class="cell_technologies">Java</div>
                            <div class="cell_technologies">0</div>
                            <div class="cell_buttons">
                            <button class="button">-</button>
                            <button class="button">+</button>
                            </div>
                            
                            <div class="cell_technologies">Angular</div>
                            <div class="cell_technologies">0</div>
                            <div class="cell_buttons">
                            <button class="button">-</button>
                            <button class="button">+</button>
                            </div>
                            
                            <div class="cell_technologies">PHP</div>
                            <div class="cell_technologies">0</div>
                            <div class="cell_buttons">
                            <button class="button">-</button>
                            <button class="button">+</button>
                            </div>
                            
                            <div class="cell_technologies">React JS</div>
                            <div class="cell_technologies">0</div>
                            <div class="cell_buttons">
                            <button class="button">-</button>
                            <button class="button">+</button>
                            </div>
                            
                            
                            <div class="cell_technologies">Python</div>
                            <div class="cell_technologies">0</div>
                            <div class="cell_technologies">
                            <button class="button">-</button>
                            <button class="button">+</button>
                            </div>
                           
                        </div>
                   </div>
            </div>
        </div>  
    </div>
</div>`;

