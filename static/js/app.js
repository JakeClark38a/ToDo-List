  // This is the main file for the app
  // using jQuery
  // Toggle cogwheel icon on click
  $(document).ready(function() {
    /// HTML templates
    var currentMode = 0;
    // Generates HTML template for a main menu tag.
    function MainMenuTagTempplate(id, tagName) {
        return (
            `
    <div id="${id}" class="MMenu-Tag flex items-center pl-5 hover:bg-gradient-to-r from-shade_yellow-600 to-transparent  cursor-pointer">
    <div class="h-full">
        <svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z" />
        </svg>
    </div>

    <div class="text-lg px-1 my-1 center">${tagName}</div>`
        );
    }
    // Generates HTML template for a main menu group.
    function MainMenuGroupTemplates(id, title) {
        return (
            `
  
  <div id="${id}" class="hover:bg-gradient-to-r from-shade_yellow-500 to-transparent"><!--block-->
    <!-- Greeting div, status centered -->
    <div class="flex justify-between items-center mx-2 *:mx-2">
        <div class="text-xl  ">${title}</div>

        <div class="MMenu-Tag-Add">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
        </div>


    </div>
    <div id="MMenu-Tag-Section" class="">
        <!--tag-->

    </div>
</div><!--eoblock-->

  
  `
        );
    }

    var tagSelection = ` <div id="Tag-item" class="w-20 h-8 border-2 border-gray-400 rounded-lg text-center">Sample</div>`;

    // eo HTML templates
    // Variables
    var Dict = {
        // sample dict
        username: "JakeClark",
        userid: "User ID",
        groups: {
            gid001: {
                title: "Do",
                tags: ["tag1"],
                color: "#7aa5cf",
                current_html: "",
            },
            gid002: {
                title: "Delegate",
                tags: ["tag2"],
                color: "#63c074",
                current_html: "",
            },
            gid003: {
                title: "Schedule",
                tags: ["tag3", "tag5"],
                color: "#7aa5cf",
                current_html: "",
            },
            gid004: {
                title: "Delete",
                tags: ["tag4"],
                color: "#6dce81",
                current_html: "",
            },
        },
        tasks: {
            id001: {
                title: "Meeting",
                description: "about making a website",
                tag: "tag1",
                deadline: "2014-01-02T11:42",
                points: 4,
            },
            id002: {
                title: "Crying",
                description: "about making a website",
                tag: "tag3",
                deadline: 62783,
                points: 4,
            },
            id004: {
                title: "Laughing",
                description: "about making a website",
                tag: "tag5",
                deadline: 62783,
                points: 4,
            },
        },
        completed: {
            id003: {
                title: "Journaling",
                description: "about making a website",
                tag: "tag1",
                deadline: 62783,
                points: 5,
            },
        },
    };

    const el1 = $("#dropMenu");
    const el1_trig = $("#dropMenuClick");
    // eo Variables

    // website events

    el1_trig.click(function() {
        if (el1.hasClass("h-0")) {
            el1.removeClass("h-0").addClass("h-full");
        } else if (el1.hasClass("h-full")) {
            el1.removeClass("h-full").addClass("h-0");
        }
    });

    function getUuid() {
        // old uuid
        // console.log("prefix_" + Math.random().toString(36).substring(2, 6));
        // return "prefix_" + Math.random().toString(36).substring(2, 6);

        // use uuidv4
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }

    function randHexColor() {
        return "#731E7D";
    }
    $("#MMenu-Group-Add").click(function() {
        $("#MMenu-Group-Section").append(MainMenuGroupTemplates(getUuid(), "none"));

        // create group dict
        Dict.groups[getUuid()] = {
            title: "New Group",
            tags: [],
            color: "#731E7D",
            current_html: "",
        };
        RefreshMainScreen();
    });

    $("#MMenu-Group-Section").on("click", ".MMenu-Tag-Add", function() {
        addNewTagMainMenu(
            $(this).parent().parent().find("#MMenu-Tag-Section"),
            "none"
        );
    });
    // Generates HTML template for a task.
    function genTaskTemplate(id, title, dl, mode = 0) {
        if (mode == 0) {
            return (
                ` 
    <div id="${id}" class=" task-outer">
      <div class=" rounded-lg h-20 border-2 border-slate-700">
          <div class=" px-2 flex justify-between border-b-2 border-slate-700">
              <div class="font-bold">${title}</div>
              <button id="Task-Cancel" class="text-red-500 font-bold">X</button>
          </div>
          <div class="p-2 flex justify-between items-center">
              <div class="text-center">End: ${dl}</div>
              <input id="Task-Destroyer" type="checkbox" id="checkbox_task"
                  class="h-8 w-8 rounded-md border-2 border-shade_red-800 ">
          </div>
      </div>
  </div>

  `
            );
        } else if (mode == 1) {
            return (
                `
      <div  id="${id}" class="w-full h-20 bg-red-500">sdsd</div>
      `
            );
        }
    }
    // Generates HTML template for a group.
    function genGroupTemplate(id, title, mode = 0) {
        if (mode == 0) {
            return (
                `
    <div id="${id}" class="overflow-y-auto bg-transparent border-t-8 border-b-4 border-l-2 border-r-2 border-shade_green-300 w-64 h-64 p-1 rounded-xl md:w-72 md:h-72 lg:w-80 lg:h-80">
        <div id="Task-Group-Title" class="todobox-title">${title}</div>
        <div id="Task-Section" class="p-3 flex flex-col gap-3">
            <!--task here-->
        </div>
    </div>
    
    `
            );
        } else if (mode == 1) {
            return (
                `
      <!-- Item  -->

      <div id="${id}" data-carousel-item="active" class="flex flex-col items-center overflow-x-hidden ease-in-out duration-700 pink z-0">
      <div id="Task-Group-Title" class="text-center">${title}</div>
      <div id="" class="Task-Section border-primary-red w-80 h-96 " >
          <!-- Contents -->
        
      </div>
  </div>
      `
            );
        }
    }
    // Generates HTML template for a formatter.
    function genFormatterTemplate(mode = 0) {
        if (mode == 0) {
            return `
    <div id="Main-Formatter" class="">
      
        <div id="Wrapper" class="flex flex-wrap justify-center items-center gap-8 py-10">
        <!--Group-->
        </div>
    </div>
    `;
        } else if (mode == 1) {
            return `
      <!-- Main List -->
      <div id="Main-Formatter" class="relative w-full" data-carousel="static">
          <!-- Carousel wrapper -->
          <div id="Wrapper" class="relative h-96 mt-[3vh] overflow-hidden">


          </div>
      </div>

      `;
        }
    }
    // Generates additional HTML elements for a formatter.
    function FormmatterAddons(mode = 0) {
        if (mode == 0) {} else if (mode == 1) {
            return `
      
      <!-- Slider controls -->
      <div class="slider z-10">
          <button type="button"
              class="absolute top-0 start-0 z-30 flex items-start justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev>
              <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M5 1 1 5l4 4" />
                  </svg>
                  <span class="sr-only">Previous</span>
              </span>
          </button>
          <button type="button"
              class="absolute top-0 end-0 z-30 flex items-start justify-center h-auto px-4 cursor-pointer group focus:outline-none"
              data-carousel-next>
              <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="sr-only">Next</span>
              </span>
          </button>
      </div>

      `;
        }
    }

    /* Main Display rule

          |_MainScreen
          |____Formatter
                | id 
                |_____title
                |
                |_____section (Task-Section , Group-Section)
                |
                |_____tag(Tag-Section)


    */
    // Renders additional elements for a formatter.
    function renderFormatterAddons(formatter_html, mode = 0) {
        formatter_html.append(FormmatterAddons(mode));
    }
    // Renders a task on the main screen.
    function renderTaskMainScreen(task_html, task, id, mode) {
        let endDate = new Date(task.deadline);
        let locale = "vi";
        var temp = genTaskTemplate(id, task.title, `${endDate.toLocaleDateString(locale)} ${endDate.toLocaleTimeString(locale)}`, mode); // Assuming genTaskTemplate function is defined elsewhere
        var t = task_html.append(temp);

        //Remove task
        t.find("#Task-Cancel").click(function() {
            // Get the HTML id of the task
            var taskId = $(this).closest(".task-outer").attr("id");
            console.log(taskId);
            Dict.tasks[taskId] = "";
            RefreshMainScreen();
        });

        //Complete task
        t.find("#Task-Destroyer").click(function(e) {
            // Get the HTML id of the task
            var taskId = $(this).closest(".task-outer").attr("id");
            Dict.tasks[taskId] = "";
            Dict.completed[taskId] = Dict.tasks[taskId];
            console.log(Dict.completed);
            setTimeout(RefreshMainScreen, 1000);
            e.stopPropagation();
        });
    }
    // Renders a group on the main screen.
    function renderGroupMainScreen(group_html, group, mode) {
        var unique_id = getUuid();
        group_html.append(genGroupTemplate(unique_id, group.title, mode));
        return $("#" + unique_id);
    }
    // Loads the main screen with groups and tasks.
    function LoadMainScreen() {
        // Also add Draggable button again
        $("#Main-Screen").append($(`
        <!-- add question action button here-->
        <div id="add-draggable"  class="">
            <div  class="touch-none select-none">
                <div id="moveButton" 
                    class="hover:w-14 hover:h-14 border-2 border-shade_green-600 shadow-xl absolute rounded-full w-12 h-12 bg-gradient-to-bl from-shade_green-500 to-shade_red-500 p-2">
                    <svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14m-7 7V5" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- kết thúc phần nút -->
        `))

        var formatter_html = $("#Main-Screen").append(genFormatterTemplate());
        // Assuming genGroupTemplate and genTaskTemplate functions are defined elsewhere

        

        // Iterate over groups
        for (var groupId in Dict.groups) {
            if (Dict.groups.hasOwnProperty(groupId)) {
                var group = Dict.groups[groupId];
                var g = renderGroupMainScreen(
                    $(formatter_html).find("#Main-Formatter").find("#Wrapper"),
                    group,
                    currentMode
                );
                var task_html = $(g).find("#Task-Section");
                // Iterate over tasks
                for (var taskId in Dict.tasks) {
                    if (
                        Dict.tasks.hasOwnProperty(taskId) &&
                        group.tags.includes(Dict.tasks[taskId].tag)
                    ) {
                        // Pass task details to renderTaskMainScreen
                        renderTaskMainScreen(
                            task_html,
                            Dict.tasks[taskId],
                            taskId,
                            currentMode
                        );
                    }
                }
            }
        }

        renderFormatterAddons(formatter_html, currentMode);
    }
    // Adds a new tag to the main menu.
    function addNewTagMainMenu(group_html, tag) {
        //console.log(group_html);
        group_html.append(MainMenuTagTempplate(getUuid(), tag));
    }
    // Adds a new group to the main menu.
    function addNewGroupMainMenu(id, group) {
        return $("#MMenu-Group-Section").append(
            MainMenuGroupTemplates(id, group.title)
        );
    }
    // Loads groups and tags.
    function LoadGroups_Tag() {
        // Iterate over each group in Dict.groups
        for (var groupId in Dict.groups) {
            if (Dict.groups.hasOwnProperty(groupId)) {
                var group = Dict.groups[groupId];
                var g = addNewGroupMainMenu(groupId, group);
                // console.log("Group: " + group.title);
                // Iterate over tags in the current group
                for (var j = 0; j < group.tags.length; j++) {
                    addNewTagMainMenu($(g), group.tags[j]);
                }
            }
        }
    }

    // Take all tags on Dict and put them in the "Select tag" dropdown
    function LoadTags() {
        var tagArray = [];
        // Iterate over each group in Dict.groups
        for (var groupId in Dict.groups) {
            if (Dict.groups.hasOwnProperty(groupId)) {
                if (Dict.groups[groupId].hasOwnProperty("tags")){
                    tagArray = [...tagArray, ...Dict.groups[groupId].tags]
                }
            }
        }
        tagArray.forEach(element => {
            let options = `<option value="${element}">${element}</option>`
            $("#crud-modal select#tags").append(options)
        });
    }
    LoadTags();

    function RefreshMainScreen() {
        $("#Main-Screen").empty();
        LoadMainScreen();
    }

    function LoadUser() {
        $("#Usernamedp").text(Dict.username);
        LoadGroups_Tag();
        LoadMainScreen();
    }

    function initUser() {
        currentMode = 0;
        LoadUser();
    }
    initUser();

    // website events

    // My work at U in CRUD modal
    $('#Main-Screen').on("click", ".task-outer", function(e){
        let id = $(this).attr("id");
        let title = Dict.tasks[id].title;
        let desc = Dict.tasks[id].description;
        let tag = Dict.tasks[id].tag;
        let expired = Dict.tasks[id].deadline;
        console.log(id, desc);
        // Clean up
        // Clean modal first
        $('#crud-modal label[for="name"]').text("Title");
        $('#crud-modal label[for="description"]').text("Task Description");
        // Change task header
        $('#crud-modal h3').text("Edit Task");
        // Change input to task details
        $('#crud-modal #name').val(title);
        $('#crud-modal #description').val(desc);
        $('#crud-modal').find(`#tags option[value="${tag}"]`).attr("selected", title);
        $('#crud-modal #todo-expired').val(expired);
        $('#crud-modal button[type="submit"]').text("Edit");
        // Change honeypot to id
        $('#crud-modal input[type="checkbox"]').attr("id", `task_${id}`);
        // Get current date
        let current_date = new Date();
        // Get date input
        let date_element = $('#crud-modal #todo-expired');
        // Get input date
        let input_date = new Date(date_element.val());
        // If input date is less than current date, show alert
        if (input_date < current_date){
            date_element.css("border", "2px solid red");
        }
        else {
            date_element.css("border", "2px solid green");
        }
        // Show modal
        modal.show();
        e.stopPropagation();
    })

    // My work at adding limitation on typing Create - Edit modal
    $("#crud-modal").on("input", "#name, #description", function(){
        // Take current input length
        let input_length = $(this).val().length;
        // Take input limitation
        let input_limit = $(this).attr("maxlength");
        // If length > 0, show this length and limitation at the same place in label
        if (input_length > 0){
            // Update length and limit
            $(this).prev().text(function(e, text){
                let label_content = text.split(" ");
                // Remove old length and limit (element that starts with "(" and ends with ")")
                label_content = label_content.filter(e => !e.startsWith("(") && !e.endsWith(")"));
                // Join new length and limit
                label_content.push(`(${input_length}/${input_limit})`);
                return label_content.join(" ");
            })
        }
        else {
            // Update length and limit
            $(this).prev().text(function(e, text){
                let label_content = text.split(" ");
                // Remove old length and limit (element that starts with "(" and ends with ")")
                label_content = label_content.filter(e => !e.startsWith("(") && !e.endsWith(")"));
                // Join just title
                return label_content.join(" ");
            })
        }
    })
    // And also checking for expired date
    $("#crud-modal").on("input", "#todo-expired", function(){
        // Get current date
        let current_date = new Date();
        // Get input date
        let input_date = new Date($(this).val());
        // If input date is less than current date, show alert
        if (input_date < current_date){
            $(this).css("border", "2px solid red");
        }
        else {
            $(this).css("border", "2px solid green");
        }
    })

    // Submit button
    $('#crud-modal form').on("submit", function(e){
        e.preventDefault();
        // Get id from honeypot, if id is empty string, it means it's a new task
        let id = $('#crud-modal input[type="checkbox"]').attr("id").split("_")[1];
        // Get all input
        let title = $('#crud-modal #name').val();
        let desc = $('#crud-modal #description').val();
        let tag = $('#crud-modal #tags').val();
        let expired = $('#crud-modal #todo-expired').val();
        console.log(id, title, desc, tag, expired);
        // Before updatind Dict, check if tag is empty
        if (id == ""){
            // Adding a new task to the tasks object within Dict
            Dict.tasks[getUuid()] = {
                title: title,
                description: desc,
                tag: tag,
                deadline: expired,
                points: 4,
            };
        }
        else {
            // Update Dict
            Dict.tasks[id].title = title;
            Dict.tasks[id].description = desc;
            Dict.tasks[id].tag = tag;
            Dict.tasks[id].deadline = expired;
        }
        alert("Submitted");
        RefreshMainScreen();
        modal.hide();
        // window.location = window.location;
    })

    // Remove it! Completed!
    // addtask_btn.addEventListener("click", function() {
    //     var title = document.getElementById("Add-Task-Title");
    //     var desc = document.getElementById("Add-Task-Desc");
    //     var tag_ = document.getElementById("add-tag-bt").innerText;
    //     if (title.value == "" || tag_ == "") {
    //         console.log("Empty task is not valid");
    //         return;
    //     }
    //     console.log(title.value, desc.value, tag_);
    //     // Adding a new task to the tasks object within Dict
    //     Dict.tasks[getUuid()] = {
    //         title: title.value,
    //         description: desc.value,
    //         tag: tag_,
    //         deadline: 62783,
    //         points: 4,
    //     };
    //     console.log(Dict.tasks);
    //     // Assuming RefreshMainScreen function is properly defined and accessible
    //     RefreshMainScreen();
    //     close();
    // });

    


    // My work at adding tags
    // When user click at the add tag button, dropdown will change content
    $("#add-tag-bt").click(function() {
        // Empty ul
        $("#dropdown ul").empty();
        // With each tag in nav bar
        $(".text-lg.px-1.my-1.center").each(function() {
            // Append list into ul
            $("#dropdown ul").append(`
    <li>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${$(
      this
    ).text()}</a>
    </li>
    `);
        });
    });

    // When user clicked at list item, it will add tag to the task and also close dropdown
    // $("#dropdown ul").on("click", "li", function () {
    //   // Add tag to the task
    //   $("#add-tag-bt").text($(this).text());
    //   // Close dropdown
    //   $("#dropdown").removeClass("block");
    //   $("#dropdown").addClass("hidden");
    // });

    // $("#Calendar-Container").hide();
    // $("#Main-Screen").show();
    // $("#MMenu-Calendar").click(function () {
    //   $("#Calendar-Container").show();
    //   $("#Main-Screen").hide();
    // });
    // $("#MMenu-Today").click(function () {
    //   $("#Calendar-Container").hide();
    //   $("#Main-Screen").show();
    // });
});
// End of app.js