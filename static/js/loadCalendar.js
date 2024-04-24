$(document).ready(function () {
  //
  //
  //

  //================================================================\\
  //=========================== Sample var =========================\\
  //================================================================\\
  var Dict = {
    // sample dict
    username: "JakeClark",
    userid: "User ID",
    groups: {
      gid001: {
        title: "Do",
        tags: ["tag1"],
        def_tag: "do",
        color: "#7aa5cf",
        current_html: "",
      },
      gid002: {
        title: "Delegate",
        tags: ["tag2"],
        def_tag: "delegate",
        color: "#63c074",
        current_html: "",
      },
      gid003: {
        title: "Schedule",
        tags: ["tag3", "tag5"],
        def_tag: "schedule",
        color: "#ac7acf",
        current_html: "",
      },
      gid004: {
        title: "Later",
        tags: ["tag4"],
        def_tag: "later",
        color: "#c5e875",
        current_html: "",
      },
    },
    tasks: {
      id001: {
        title: "Meeting",
        description: "About making a website",
        tag: "tag1",
        deadline: 62783,
        points: 4,
      },
      id002: {
        title: "Crying",
        description: "About making a website",
        tag: "tag3",
        deadline: 62783,
        points: 4,
      },
      id004: {
        title: "Laughing",
        description: "About making a website",
        tag: "tag5",
        deadline: 62783,
        points: 4,
      },
    },
    completed: {
      id003: {
        title: "Journaling",
        description: "About making a website",
        tag: "tag1",
        deadline: 62783,
        points: 5,
      },
    },
    tags: {

      do:{
        title: "Do",
        color: "#7aa5cf",
        groupId: "gid001",
        deleteable: false,
        editable: false,
        display: false,
      },
      delegate: {
        title: "Delegate",
        color: "#63c074",
        groupId: "gid002",
        deleteable: false,
        editable: false,
        display: false,
      },
      schedule: {
        title: "Schedule",
        color: "#ac7acf",
        groupId: "gid003",
        deleteable: false,
        editable: false,
        display: false,
      },
      later: {
        title: "Later",
        color: "#c5e875",
        groupId: "gid004",
        deleteable: false,
        editable: false,
        display: false,
      },
      tag1: {
          title: "tag1",
          color: "#7aa5cf",
          groupId: "gid001",
          deleteable: true,
          editable: true,
          display: true,

      },
      tag2: {
          title: "tag2",
          color: "#63c074",

          groupId: "gid002",
          deleteable: true,
          editable: true,
          display: true,

      },
      tag3: {
          title: "tag3",
          color: "#ac7acf",

          groupId: "gid003",
          deleteable: true,
          editable: true,
          display: true,

      },
      tag4: {
          title: "tag4",
          color: "#c5e875",

          groupId: "gid004",
          deleteable: true,
          editable: true,
          display: true,

      },
      tag5: {
          title: "tag5",
          color: "#f7d38c",

          groupId: "gid003",
          deleteable: true,
          editable: true,
          display: true,

      },
      none: {
          title: "none",
          color: "#ffffff",

          deleteable: false,
          editable: false,
          display: false,

      }
  }
  
  };

  var currentMode = 0;
  var isMakeChangeGroup = false;

  var currentMMenuTab = 0 ;  // 0-today 1-cal 2-garden


  //
  //
  //

  //################################################### Templates #########################################################

  //================================================================\\
  //=========================== Main Menu ==========================\\
  //================================================================\\

  function MainMenuTagTempplate(id, tag) {
    return (
      `
    
    <div id="` +id +`" class="MMenu-Tag flex items-center pl-8 cursor-pointer">
    <div class="h-full">
        <svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z" />
        </svg>
    </div>

    <div id="MMenu-Tag-Title" class="text-lg px-1 my-1 center">` + tag.title +`</div>
    <div class="MMenu-Tag-Edit mx-1">
    <svg class="w-5 lg:w-7 h-5 lg:h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
</svg>
</div>
</div>

`
    );
  }

  function MainMenuGroupTemplates(id, group) {
    return (
      `
  
  <div id="` +id +`" class="MMenu-Group"><!--block-->
    <!-- Greeting div, status centered -->
        <div class="flex justify-between items-center pl-3 pr-1">

          <div class="MMenu-Toggle-Hidden flex items-center w-full">
            <div class="MMenu-Dropdown-Arrow">
            <svg class="w-5 lg:w-7 h-5 lg:h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9-7 7-7-7"/>
          </svg>          
            </div>

                <div id="MMenu-Group-Title" class="text-xl ml-2">` + group.title + `</div>
        </div>

        <div class="MMenu-Group-Edit mx-1">
        <svg class="w-5 lg:w-7 h-5 lg:h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
      </svg>
      
      
        </div>
        <div class="MMenu-Tag-Add">
            <svg class="w-5 lg:w-7 h-5 lg:h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
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

  //================================================================\\
  //=========================== Main Screen ========================\\
  //================================================================\\

  function MainScreenTagTemplate(id, tag,mode =0) {
    if(mode == 0){
      return(`
      <div id="`+id+`" class="rounded-md text-center min-w-12 font-base text-xs border-none shadow-lg cursor-pointer">`+tag.title+`</div>                
      `);
    }
  }
  function MainScreenTaskTemplate(id, task, mode = 0) {
    if (mode == 0) {
      return (
        ` 

        <div id="`+ id + `" class="task-outer bg-main rounded-xl cursor-default">
        <div class=" rounded-lg shadow-lg">

            <div class=" px-2 py-1 flex justify-between items-center border-b-[2px]">

                <div class="font-semibold text-lg lg:text-xl truncate w-full">`
                    + task.title + `</div>


                <div class="flex items-center gap-2">
                    <div class="Task-Edit mx-1 cursor-pointer">
                        <svg class="w-5 lg:w-7 h-5 lg:h-7 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                    </div>


                    <div id="Task-Cancel"
                        class="bg-red-500 rounded-full shadow-lg h-4 w-4 lg:h-6 lg:w-6 font-bold cursor-pointer"></div>
                </div>
            </div>

            <div class="p-2 flex items-center h-fit">

                <p class="h-full w-full text-left p-2 font-base truncate lg:text-xl">`+ task.description + `</p>

                <input id="Task-Destroyer" type="checkbox"
                    class="bg-primary-200 rounded-xl shadow-lg h-4 w-4 font-bold border-none cursor-pointer"></input>
            </div>
            <div id="Task-Tag" class="p-2 flex gap-2 overflow-hidden">
              
            </div>
        </div>

    </div>

  `
      );
    } else if (mode == 1) {
      return (
        `
      <div id="`+ id + `" class="task-outer">
        <div class=" rounded-lg h-20 lg:h-32 border-2 border-slate-700">
  
            <div class=" px-2 flex justify-between items-center border-b-2 border-slate-700">
                <div class="font-bold text-xl lg:text-2xl">` + task.title + `</div>
                <div id="Task-Cancel" class="bg-red-500 rounded-full h-4 w-4 font-bold cursor-pointer"></div>
            </div>
  
            <div class="p-2 flex justify-between items-center lg:h-24">
                <div class="text-center lg:text-xl">`+ task.description + `</div>
                <input id="Task-Destroyer" type="checkbox" class="bg-primary-200 rounded-xl h-4 w-4 font-bold border-none cursor-pointer"></input>
            </div>
            
          </div>

      </div>
  
      `
      );
    }
  }

  function MainScreenGroupTemplate(id, group, mode = 0) {
    if (mode == 0) {
      return (
        `
    <div id="` +id +`" class="group-outer">
      <div class="flex justify-between items-center px-3 ">
        <div id="Task-Group-Title" class="todobox-title lg:text-2xl">` + group.title +`</div>
        <div class="Group-Task-Add">
                <svg class="w-6 lg:w-7 h-6 lg:h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14m-7 7V5" />
                </svg>
            </div>
        </div>
        <div id="Task-Section-Outer" class="bg-main/35 transition-all duration-300 ease-in-out border-t-8 pt-4 p-2 overflow-hidden shadow-xl hover:shadow-2xl rounded-xl ">
            <div id="Task-Section" class="relative px-2 pb-9 flex flex-col gap-3 overflow-y-auto overflow-x-hidden rounded-xl w-72 h-72 lg:w-96 lg:h-96">
            <!--task here-->
            </div>
          
        </div>
    </div>
    
    `
      );
    } else if (mode == 1) {
      return (
        `
      <!-- Item  -->

      <div id="` +id +`" data-carousel-item class="flex flex-col items-center overflow-x-hidden ease-in-out duration-700 z-0">
        <div id="Task-Group-Title" class="text-center">` + group.title +`</div>
          <div id="" class="Task-Section border-primary-100 w-80 h-96 border-2" >
          <!-- Contents -->
        
          </div>
      </div>
      `
      );
    }
  }

  function MainScreenFormatterTemplate(mode = 0) {
    if (mode == 0) {
      return `
    <div id="Main-Formatter" class="relative w-full">
      
        <div id="Wrapper" class="relative flex flex-wrap justify-center items-center gap-8 py-10 lg:px-36">
        <!--Group-->
        </div>
    </div>
    `;
    } else if (mode == 1) {
      return `
      <!-- Main List -->
      <div id="Main-Formatter" class="relative w-full bg-red-300" data-carousel="static">
          <!-- Carousel wrapper -->
          <div id="Wrapper" class="relative h-96 mt-[3vh] overflow-hidden">


          </div>
      </div>

      `;
    }
  }

  function FormmatterAddons(mode = 0) {
    if (mode == 0) {
    } else if (mode == 1) {
      return `
      
      <!-- Slider controls -->
      <div class="slider z-10">
          <button type="button"
              class="absolute top-1/2 z-30 flex items-start justify-center h-auto px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev>
              <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5" d="M5 1 1 5l4 4" />
                  </svg>
                  <span class="sr-only">Previous</span>
              </span>
          </button>
          <button type="button"
              class="absolute top-1/2 right-0 z-30 flex items-start justify-center h-auto px-4 cursor-pointer group focus:outline-none"
              data-carousel-next>
              <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5" d="m1 9 4-4-4-4" />
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
        |     | id 
        |     |_____title
        |     |
        |     |_____section (Task-Section , Group-Section)
        |     |
        |     |_____tag(Tag-Section)
        |______Addons

  */
  //################################################### Fuctions #########################################################

  //================================================================\\
  //=========================== General ============================\\
  //================================================================\\
  function getUuid() {
    // old uuid
    // return (
    //   "generateId" +
    //   Math.random().toString(36).substring(2, 6) +
    //   Math.random().toString(36).substring(2, 6)
    // );
    // use uuidv4
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

  function randHexColor() {
    return "#" + ((Math.random() * 0xF0F0F0 << 0).toString(16).padStart(6, '0'));
  }
   //================================================================\\
  //=========================== Avatar Menu ========================\\
  //================================================================\\
  $("#Avatar-Menu-Click").click(function () {
    $("#Avatar-Menu").toggleClass("h-32 lg:h-44");
    $("#Avatar-Menu-Click").toggleClass("bg-primary-200");
  });

  //================================================================\\
  //=========================== Main Menu ==========================\\
  //================================================================\\

  $("#Main-Menu-Click").click(function () {
    $("#Main-Menu").toggleClass("h-[86vh]");
    $("#Main-Menu-Click").toggleClass("-rotate-90")
  });

  function updateMMenuTabIndicator(tab = null){
    var $tab = tab ? tab : $("#Main-Menu").find("#MMenu-Today");
    var currId = $tab.attr('id');
    const indiModeCSS = 'border-r-4 border-primary-200 bg-gradient-to-l from-primary-200/35 to-transparent';

    // clear all previous tab border 
    $('#Main-Menu').find('.MMenu-Primary-Section').removeClass(indiModeCSS);
    //console.log(currId);
    const indicatTab = ['MMenu-Today', 'MMenu-Calendar', 'MMenu-Garden'];
    if(indicatTab.indexOf(currId) !== -1){
      $tab.toggleClass(indiModeCSS);
    }
  }
  
  $('#Main-Menu').on('click','.MMenu-Primary-Section',function(e){
    updateMMenuTabIndicator($(this));
  });

  //Add group
  $("#MMenu-Group-Add").click(function () {
      isMakeChangeGroup = true;
      // Customize modal appearance
      $('#crud-modal label[for="name"]').text("Title");

      $('#crud-modal h3').text("Create Group");
      $('#crud-modal #name').attr('placeholder', 'Group name');;
      $('#crud-modal #name').val('');
  
      $('#crud-modal #desc-sec').hide();
      $('#crud-modal #tags-sec').hide();
      $('#crud-modal #todo-expired-sec').hide();

  
      $('#crud-modal button[type="submit"]').html(`
      <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
      Create`);
      $('#crud-modal input[type="checkbox"]').attr("id", `task_`);
      // Show modal
      addGroupnTagModal.show();
  });

  /// Add tag
  $("#MMenu-Group-Section").on("click", ".MMenu-Tag-Add", function () {
    isMakeChangeGroup = false;
    /// add tag
    var gid = $(this).closest(".MMenu-Group").attr("id")
    //console.log(groupDict);
    //addTag(groupDict)
    LoadGroups();

    // Customize modal appearance
    $('#crud-modal label[for="name"]').text("Name");

    $('#crud-modal h3').text("Create Tag");
    $('#crud-modal #name').attr('placeholder', 'Tag name');
    $('#crud-modal #name').val('');

    $('#crud-modal #desc-sec').hide();
    $('#crud-modal #todo-expired-sec').hide();
    $('#crud-modal #tags-sec').hide();
    $('#crud-modal #groups-sec').show();

    $('#crud-modal button[type="submit"]').html(`
    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
    Create`);
    $('#crud-modal input[type="checkbox"]').attr("id", `task_`);
    // Show modal
    addGroupnTagModal.show();

  });
  

  /// Edit Group
  $("#MMenu-Group-Section").on("click", ".MMenu-Group-Edit", function () {
    console.log($(this).closest(".MMenu-Group").attr("id"));
    var gid = $(this).closest(".MMenu-Group").attr("id");
    var gInfo = Dict.groups[gid] ;
    isMakeChangeGroup = true;
    $('#crud-modal label[for="name"]').text("Title");

      $('#crud-modal h3').text("Edit Group");
      $('#crud-modal #name').attr('placeholder', 'Group name');;
      $('#crud-modal #name').val(gInfo.title);
  
      $('#crud-modal #desc-sec').hide();
      $('#crud-modal #tags-sec').hide();
      $('#crud-modal #groups-sec').hide();
      $('#crud-modal #todo-expired-sec').hide();

      $('#crud-modal #colors').val(gInfo.color);
  
      $('#crud-modal button[type="submit"]').html(`
      <svg class="w-5 lg:w-7 h-5 lg:h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
    </svg> Edit
      `);

      $('#crud-modal #delete-sec').show();

      $('#crud-modal input[type="checkbox"]').attr("id", `group_${gid}`);
      
    // Show modal
    addGroupnTagModal.show();
  });

  /// Edit Tag
  $("#MMenu-Group-Section").on("click", ".MMenu-Tag-Edit", function () {
    console.log($(this).closest(".MMenu-Tag").attr("id"));
    var tid = $(this).closest(".MMenu-Tag").attr("id")
    var tagInfo = Dict.tags[tid] ;

    if(tagInfo.editable == false) return;

    isMakeChangeGroup = false;

     // Customize modal appearance
    $('#crud-modal label[for="name"]').text("Name");

    $('#crud-modal h3').text("Edit Tag");
    $('#crud-modal #name').attr('placeholder', 'Tag name');
    $('#crud-modal #name').val(tagInfo.title);

    $('#crud-modal #desc-sec').hide();
    $('#crud-modal #todo-expired-sec').hide();
    $('#crud-modal #tags-sec').hide();
    $('#crud-modal #groups-sec').hide();


    if(tagInfo.deletable == true) {
      $('#crud-modal #delete-sec').show();
    };

    $('#crud-modal button[type="submit"]').html(`
    <svg class="w-5 lg:w-7 h-5 lg:h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
  </svg> Edit
    `);

    $('#crud-modal input[type="checkbox"]').attr("id", `tag_${tid}`);
    // Show modal
    addGroupnTagModal.show();
  });

  function toggleHiddenMMenuGroup(group) {
    group.find("#MMenu-Tag-Section").toggle("hidden");
    group.find(".MMenu-Dropdown-Arrow").toggleClass("-rotate-90");
  }

  $("#MMenu-Group-Section").on("click", ".MMenu-Toggle-Hidden", function () {
    toggleHiddenMMenuGroup($(this).parent().parent());
  });

  function addNewTagMainMenu(group_html, id, tag) {
    //console.log(group_html);
    group_html.append(MainMenuTagTempplate(id,tag));
   // LoadTags();
  }

  function addNewGroupMainMenu(unique_id, group) {
    $("#MMenu-Group-Section").append(
      MainMenuGroupTemplates(unique_id, group)
    );
    
    return $("#" + unique_id);
  }

  function LoadGroups_Tag() {
    // Iterate over each group in Dict.groups
    for (var groupId in Dict.groups) {
      if (Dict.groups.hasOwnProperty(groupId)) {
        var group = Dict.groups[groupId];
        var g = addNewGroupMainMenu(groupId, group);
        // console.log("Group: " + group.title);
        // Iterate over tags in the current group
        for (var j = 0; j < group.tags.length; j++) {

          if(Dict.tags[group.tags[j]].display == false) continue;

          addNewTagMainMenu(g.find("#MMenu-Tag-Section"),group.tags[j] ,Dict.tags[group.tags[j]]);
        }
        toggleHiddenMMenuGroup(g);
      }
    }
  }

  // Calendar
  function LoadCalendar () {
    const calendar = document.querySelector(".calendar"),
      date = document.querySelector(".date"),
      daysContainer = document.querySelector(".days"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      todayBtn = document.querySelector(".today-btn"),
      gotoBtn = document.querySelector(".goto-btn"),
      dateInput = document.querySelector(".date-input"),
      eventDay = document.querySelector(".event-day"),
      eventDate = document.querySelector(".event-date"),
      tasksContainer = document.querySelector(".events"),
      addEventBtn = document.querySelector(".add-event"),
      addEventWrapper = document.querySelector(".add-event-wrapper "),
      addEventCloseBtn = document.querySelector(".close "),
      addEventTitle = document.querySelector(".event-name "),
      addEventFrom = document.querySelector(".event-time-from "),
      addEventTo = document.querySelector(".event-time-to "),
      addEventDescription = document.querySelector(".event-description ")
      addEventSubmit = document.querySelector(".add-event-btn ");
    let today = new Date();
    let activeDay;
    let month = today.getMonth();
    let year = today.getFullYear();
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    // const eventsArr = [
    //   {
    //     day: 13,
    //     month: 11,
    //     year: 2022,
    //     events: [
    //       {
    //         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
    //         time: "10:00 AM",
    //       },
    //       {
    //         title: "Event 2",
    //         time: "11:00 AM",
    //       },
    //     ],
    //   },
    // ];
    const eventsArr = [];
    getEvents();
    console.log(eventsArr);
  
    //function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
    function initCalendar() {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const prevLastDay = new Date(year, month, 0);
      const prevDays = prevLastDay.getDate();
      const lastDate = lastDay.getDate();
      const day = firstDay.getDay();
      const nextDays = 7 - lastDay.getDay() - 1;
  
      date.innerHTML = months[month] + " " + year;
  
      let days = "";
  
      for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
      }
  
      for (let i = 1; i <= lastDate; i++) {
        //check if event is present on that day
        let event = false;
        eventsArr.forEach((eventObj) => {
          if (
            eventObj.day === i &&
            eventObj.month === month + 1 &&
            eventObj.year === year
          ) {
            event = true;
          }
        });
        if (
          i === new Date().getDate() &&
          year === new Date().getFullYear() &&
          month === new Date().getMonth()
        ) {
          activeDay = i;
          getActiveDay(i);
          updateEvents(i);
          if (event) {
            days += `<div class="day today active event">${i}</div>`;
          } else {
            days += `<div class="day today active">${i}</div>`;
          }
        } else {
          if (event) {
            days += `<div class="day event">${i}</div>`;
          } else {
            days += `<div class="day ">${i}</div>`;
          }
        }
      }
  
      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
      }
      daysContainer.innerHTML = days;
      addListner();
    }
  
    //function to add month and year on prev and next button
    function prevMonth() {
      month--;
      if (month < 0) {
        month = 11;
        year--;
      }
      initCalendar();
    }
  
    function nextMonth() {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      initCalendar();
    }
  
    prev.addEventListener("click", prevMonth);
    next.addEventListener("click", nextMonth);
  
    initCalendar();
  
    //function to add active on day
    function addListner() {
      const days = document.querySelectorAll(".day");
      days.forEach((day) => {
        day.addEventListener("click", (e) => {
          getActiveDay(e.target.innerHTML);
          updateEvents(Number(e.target.innerHTML));
          activeDay = Number(e.target.innerHTML);
          //remove active
          days.forEach((day) => {
            day.classList.remove("active");
          });
          //if clicked prev-date or next-date switch to that month
          if (e.target.classList.contains("prev-date")) {
            prevMonth();
            //add active to clicked day afte month is change
            setTimeout(() => {
              //add active where no prev-date or next-date
              const days = document.querySelectorAll(".day");
              days.forEach((day) => {
                if (
                  !day.classList.contains("prev-date") &&
                  day.innerHTML === e.target.innerHTML
                ) {
                  day.classList.add("active");
                }
              });
            }, 100);
          } else if (e.target.classList.contains("next-date")) {
            nextMonth();
            //add active to clicked day afte month is changed
            setTimeout(() => {
              const days = document.querySelectorAll(".day");
              days.forEach((day) => {
                if (
                  !day.classList.contains("next-date") &&
                  day.innerHTML === e.target.innerHTML
                ) {
                  day.classList.add("active");
                }
              });
            }, 100);
          } else {
            e.target.classList.add("active");
          }
        });
      });
    }
  
    todayBtn.addEventListener("click", () => {
      today = new Date();
      month = today.getMonth();
      year = today.getFullYear();
      initCalendar();
    });
  
    dateInput.addEventListener("input", (e) => {
      dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
      if (dateInput.value.length === 2) {
        dateInput.value += "/";
      }
      if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
      }
      if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
          dateInput.value = dateInput.value.slice(0, 2);
        }
      }
    });
  
    gotoBtn.addEventListener("click", gotoDate);
  
    function gotoDate() {
      console.log("here");
      const dateArr = dateInput.value.split("/");
      if (dateArr.length === 2) {
        if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
          month = dateArr[0] - 1;
          year = dateArr[1];
          initCalendar();
          return;
        }
      }
      alert("Invalid Date");
    }
  
    //function get active day day name and date and update eventday eventdate
    function getActiveDay(date) {
      const day = new Date(year, month, date);
      const dayName = day.toString().split(" ")[0];
      eventDay.innerHTML = dayName;
      eventDate.innerHTML = date + " " + months[month] + " " + year;
    }
  
    //function update events when a day is active
    function updateEvents(date) {
      let events = "";
      eventsArr.forEach((event) => {
        if (
          date === event.day &&
          month + 1 === event.month &&
          year === event.year
        ) {
          // event.events.forEach((event) => {
          //   events += `<div class="event">
          //       <div class="title">
          //         <i class="fas fa-circle"></i>
          //         <h3 class="event-title">${event.title}</h3>
          //       </div>
          //       <div class="event-time">
          //         <span class="event-time">${event.time}</span>
          //       </div>
          //   </div>`;
          // });
  
          // event class is like task-container-calendar
          event.events.forEach((event) => {
            events += 
            `
            <div class="event task-container-calendar">
              <div class="time-display">${event.time}</div>
              <div class="task-information">
                <div class="task-title">${event.title}</div>
                <div class="task-description">${event.description}</div> 
                <div class="tags-display">
                  <div class="tag-important">important</div>
                  <div class="tag-urgent">urgent</div>
                </div>
              </div>
            </div>`;
          });
        // <div class="task-container-calendar">
        //   <div class="time-display">8:30</div>
        //   <div class="task-information">
        //     <!-- toi da 128 ki tu -->
        //     <div class="task-title">đi nhà nghỉ</div>
        //     <!-- toi da 128 ki tu description -->
        //     <div class="text-description">Không nên nghỉ</div> 
        //     <div class="tags-display">
        //       <div class="tag-important">important</div>
        //       <div class="tag-urgent">urgent</div>
        //     </div>
        //   </div>
        // </div>
        }
      });
      if (events === "") {
        events = `<div class="no-event">
                <h3>No Events</h3>
            </div>`;
      }
      tasksContainer.innerHTML = events;
      saveEvents();
    }
  
    // //function to add event
    // addEventBtn.addEventListener("click", () => {
    //   addEventWrapper.classList.toggle("active");
    // });
  
    // addEventCloseBtn.addEventListener("click", () => {
    //   addEventWrapper.classList.remove("active");
    // });
  
    // document.addEventListener("click", (e) => {
    //   if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    //     addEventWrapper.classList.remove("active");
    //   }
    // });
  
    // //allow 50 chars in eventtitle
    // addEventTitle.addEventListener("input", (e) => {
    //   addEventTitle.value = addEventTitle.value.slice(0, 60);
    // });
  
    // //allow only time in eventtime from and to
    // addEventFrom.addEventListener("input", (e) => {
    //   addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    //   if (addEventFrom.value.length === 2) {
    //     addEventFrom.value += ":";
    //   }
    //   if (addEventFrom.value.length > 5) {
    //     addEventFrom.value = addEventFrom.value.slice(0, 5);
    //   }
    // });
  
    // addEventTo.addEventListener("input", (e) => {
    //   addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    //   if (addEventTo.value.length === 2) {
    //     addEventTo.value += ":";
    //   }
    //   if (addEventTo.value.length > 5) {
    //     addEventTo.value = addEventTo.value.slice(0, 5);
    //   }
    // });
  
    // //allow 50 chars in description
    // addEventDescription.addEventListener("input", (e) => {
    //   addEventDescription.value = addEventDescription.value.slice(0, 60);
    // });
  
    // //function to add event to eventsArr
    // addEventSubmit.addEventListener("click", () => {
    //   const eventTitle = addEventTitle.value;
    //   const eventTimeFrom = addEventFrom.value;
    //   const eventTimeTo = addEventTo.value;
    //   const eventDescription = addEventDescription.value;
    //   if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "" || eventDescription === "") {
    //     alert("Please fill all the fields");
    //     return;
    //   }
  
    //   //check correct time format 24 hour
    //   const timeFromArr = eventTimeFrom.split(":");
    //   const timeToArr = eventTimeTo.split(":");
    //   if (
    //     timeFromArr.length !== 2 ||
    //     timeToArr.length !== 2 ||
    //     timeFromArr[0] > 23 ||
    //     timeFromArr[1] > 59 ||
    //     timeToArr[0] > 23 ||
    //     timeToArr[1] > 59
    //   ) {
    //     alert("Invalid Time Format");
    //     return;
    //   }
  
    //   const timeFrom = convertTime(eventTimeFrom);
    //   const timeTo = convertTime(eventTimeTo);
      
  
    //   //check if event is already added
    //   let eventExist = false;
    //   eventsArr.forEach((event) => {
    //     if (
    //       event.day === activeDay &&
    //       event.month === month + 1 &&
    //       event.year === year
    //     ) {
    //       event.events.forEach((event) => {
    //         if (event.title === eventTitle) {
    //           eventExist = true;
    //         }
    //       });
    //     }
    //   });
    //   if (eventExist) {
    //     alert("Event already added");
    //     return;
    //   }
    //   const newEvent = {
    //     title: eventTitle,
    //     time: timeFrom + " - " + timeTo,
    //     description: eventDescription
    //   };
    //   console.log(newEvent);
    //   console.log(activeDay);
    //   let eventAdded = false;
    //   if (eventsArr.length > 0) {
    //     eventsArr.forEach((item) => {
    //       if (
    //         item.day === activeDay &&
    //         item.month === month + 1 &&
    //         item.year === year
    //       ) {
    //         item.events.push(newEvent);
    //         eventAdded = true;
    //       }
    //     });
    //   }
  
    //   if (!eventAdded) {
    //     eventsArr.push({
    //       day: activeDay,
    //       month: month + 1,
    //       year: year,
    //       events: [newEvent],
    //     });
    //   }
  
    //   console.log(eventsArr);
    //   addEventWrapper.classList.remove("active");
    //   addEventTitle.value = "";
    //   addEventFrom.value = "";
    //   addEventTo.value = "";
    //   addEventDescription.value = "";
    //   updateEvents(activeDay);
    //   //select active day and add event class if not added
    //   const activeDayEl = document.querySelector(".day.active");
    //   if (!activeDayEl.classList.contains("event")) {
    //     activeDayEl.classList.add("event");
    //   }
    // });
  
    //function to delete event when clicked on event
    tasksContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("event")) {
        if (confirm("Are you sure you want to delete this event?")) {
          const eventTitle = e.target.children[1].children[0].innerHTML;
          eventsArr.forEach((event) => {
            if (
              event.day === activeDay &&
              event.month === month + 1 &&
              event.year === year
            ) {
              event.events.forEach((item, index) => {
                if (item.title === eventTitle) {
                  event.events.splice(index, 1);
                }
              });
              //if no events left in a day then remove that day from eventsArr
              if (event.events.length === 0) {
                eventsArr.splice(eventsArr.indexOf(event), 1);
                //remove event class from day
                const activeDayEl = document.querySelector(".day.active");
                if (activeDayEl.classList.contains("event")) {
                  activeDayEl.classList.remove("event");
                }
              }
            }
          });
          updateEvents(activeDay);
        }
      }
    });
  
    //function to save events in local storage
    function saveEvents() {
      localStorage.setItem("events", JSON.stringify(eventsArr));
    }
  
    //function to get events from local storage
    function getEvents() {
      //check if events are already saved in local storage then return event else nothing
      if (localStorage.getItem("events") === null) {
        return;
      }
      eventsArr.push(...JSON.parse(localStorage.getItem("events")));
    }
  
    function convertTime(time) {
      //convert time to 24 hour format
      let timeArr = time.split(":");
      let timeHour = timeArr[0];
      let timeMin = timeArr[1];
      let timeFormat = timeHour >= 12 ? "PM" : "AM";
      timeHour = timeHour % 12 || 12;
      time = timeHour + ":" + timeMin + " " + timeFormat;
      return time;
    }
  
  };
  

  //================================================================\\
  //========================== AJAX Zone  ==========================\\
  //================================================================\\

  function AJAXaddGroup(groupId, title, color) {
    // Send AJAX request to backend at /todo/group/create to add group
    $.ajax({
      type: "POST",
      url: "/todo/group/create",
      data: JSON.stringify({ groupId: groupId, title: title, color: color }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXaddTag(tagId, groupId, title, color) {
    // Send AJAX request to backend at /todo/tag/create to add tag
    $.ajax({
      type: "POST",
      url: "/todo/tag/create",
      data: JSON.stringify({ tagId: tagId, groupId: groupId, title: title, color: color }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXupdateGroup(groupId, title, color) {
    // Send AJAX request to backend at /todo/group/update to edit group
    $.ajax({
      type: "POST",
      url: "/todo/group/update",
      data: JSON.stringify({ groupId: groupId, title: title, color: color }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXupdateTag(tagId, groupId, title, color) {
    // Send AJAX request to backend at /todo/tag/update to edit tag
    $.ajax({
      type: "POST",
      url: "/todo/tag/update",
      data: JSON.stringify({ tagId: tagId, groupId: groupId, title: title, color: color }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXdeleteGroup(groupId) {
    // Send AJAX request to backend at /todo/group/delete to delete group
    $.ajax({
      type: "POST",
      url: "/todo/group/delete",
      data: JSON.stringify({ groupId: groupId }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXdeleteTag(tagId) {
    // Send AJAX request to backend at /todo/tag/delete to delete tag
    $.ajax({
      type: "POST",
      url: "/todo/tag/delete",
      data: JSON.stringify({ tagId: tagId }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXcreateTask(taskId, title, description, tag, deadline, points, isCompleted=false) {
    // Send AJAX request to backend at /todo/create to create task
    $.ajax({
      type: "POST",
      url: "/todo/create",
      data: JSON.stringify({ 
        taskId: taskId, title: title, description: description, tag: tag, deadline: deadline, points: points, isCompleted: isCompleted
      }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXdeleteTask(taskId) {
    // Send AJAX request to backend at /todo/delete to delete task  
    $.ajax({
      type: "POST",
      url: "/todo/delete",
      data: JSON.stringify({ taskId: taskId }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  function AJAXcompleteTask(taskId) {
    // Send AJAX request to backend at /todo/completed/<id> to mark task as completed
    $.ajax({
      type: "POST",
      url: "/todo/completed/" + taskId,
      data: JSON.stringify({ taskId: taskId, isCompleted: true}),
      contentType: "application/json",
      dataType: "json",
      success: function(data){
        console.log("Success");
      },
      error: function(data){
        console.log("Error");
      }
    });
  }

  function AJAXupdateTask(taskId, title, description, tag, deadline, points, isCompleted=false) {
    // Send AJAX request to backend at /todo/update to update task
    $.ajax({
      type: "POST",
      url: "/todo/update",
      data: JSON.stringify({ 
        taskId: taskId, title: title, description: description, tag: tag, deadline: deadline, points: points, isCompleted: isCompleted
      }),
      contentType: "application/json",
      dataType: "json",
      success: function (data) {
        console.log("Success");
      },
      error: function (data) {
        console.log("Error");
      }
    });
  }

  //================================================================\\
  //========================== Main Screen =========================\\
  //================================================================\\

  function updateTime() {
    const now = new Date();
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let hours = now.getHours().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = formattedTime;
  }
  
  setInterval(updateTime, 1000);
  
  function renderTagMainScreen(tag_html, tag, id, mode = 0) {
    //console.log(tag.display);
    if(tag.display == false) return;
    tag_html.append(MainScreenTagTemplate(id, tag, mode));
    tag_html.find("#"+id).css({"background-color":tag.color});
  }
  

  function renderFormatterAddons(formatter_html, mode = 0) {
    formatter_html.append(FormmatterAddons(mode));
  }

  function renderTaskMainScreen(task_html, task, id, mode = 0) {
    task_html.append(MainScreenTaskTemplate(id, task, mode));
    renderTagMainScreen(task_html.find("#" + id).find("#Task-Tag"), Dict.tags[task.tag], task.tag);
  }

  //Remove task
  $("#Main-Screen").on("click", "#Task-Cancel", function (e) {
    var task_ = $(this).closest(".task-outer");
    var taskId = task_.attr("id");

    // Send AJAX request to backend at /todo/delete to delete task
    AJAXdeleteTask(taskId);

    delete Dict.tasks[taskId];
    console.log("Cancelled: " + taskId);
    //console.log(Dict.tasks);

    task_.toggleClass("transform transition-all duration-350 delay-75 ease-in-out scale-0 blur-md translate-y-20");
    
    setTimeout(() => {
      task_.remove();
    }, 400);
  });

  // Complete task
  $("#Main-Screen").on("click", "#Task-Destroyer", function () {
    var task_ = $(this).closest(".task-outer");
    var taskId = task_.attr("id");
    
    // Disable the checkbox
    $(this).prop("disabled", true);
  
    console.log("Completed: " + taskId);

    Dict.completed[taskId] = Dict.tasks[taskId];
    delete Dict.tasks[taskId]; 

    // Also send to backend at /todo/completed/<id>
    AJAXcompleteTask(taskId);

    //console.log(Dict.completed);
    //console.log(Dict.tasks);

    task_.toggleClass(" transform transition-all duration-350 delay-500 ease-in-out scale-150 blur-xl -translate-y-20");
    setTimeout(() => {
      task_.remove();
    }, 800);
  });
  

  function renderGroupMainScreen(group_html, group,unique_id, mode = 0) {
   // var unique_id = getUuid();
    group_html.append(MainScreenGroupTemplate(unique_id, group, mode));
    group_html.find("#" + unique_id).find("#Task-Section-Outer").css({"border-color": group.color});
    return group_html.find("#" + unique_id);
  }

  function LoadMainScreen() {
    // Also add Draggable button again
    $("#Main-Screen").append($(`
    <!-- add question action button here-->
    <div id="add-draggable"  class="z-40 absolute">
        <div  class="touch-none select-none">
            <div id="moveButton" 
                class="hover:w-12 hover:h-12 border-2 border-gray-300 absolute rounded-full w-12 h-12 bg-main/55 backdrop-blur-sm shadow-xl p-2">
                <svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M5 12h14m-7 7V5" />
                </svg>
            </div>
        </div>
    </div>
    <!-- kết thúc phần nút -->
    `))
    $("#Main-Screen").append($(`
    <!-- Begin Calendar -->
        <div id="Calendar-Container" class="container">
            <div class="left">
                <div class="calendar">
                    <div class="month">
                        <i class="prev">
                            &lt;</i>
                        <div class="date">december 2015</div>
                        <i class="next">&gt;</i>
                    </div>
                    <div class="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="days"></div>
                    <div class="goto-today">
                        <div class="goto">
                            <input type="text" placeholder="mm/yyyy" class="date-input" />
                            <button class="goto-btn">Go</button>
                        </div>
                        <button class="today-btn">Today</button>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="tasks-display">
                    <div class="today-date">
                        <div class="day-and-date">
                            <div class="event-day">wed</div>
                            <div class="event-date">12th december 2022</div>
                        </div>

                        <!-- today-date equivilent to events -->
                        <!-- task-container is equivilent to event -->
                        <!-- this events div call a lot of function, be ware deleted it -->
                        <div class="events"></div>

                        

                        <!-- if we click in the event class div it will have delete function available -->

                        <!-- <div class="task-container">
									<div class="time-display">8:30</div>
									<div class="task-information">
										<div class="task-title">đi nhà nghỉ</div>
										<div class="task-description">Không nên nghỉ</div> 
										<div class="tags-display">
											<div class="tag-important">important</div>
											<div class="tag-urgent">urgent</div>
										</div>
									</div>
								</div> -->

                    </div>
                </div>
                <div class="add-event-wrapper">
                    <div class="add-event-header">
                        <div class="title">Add Event</div>
                        <i class="fas fa-times close"></i>
                    </div>
                    <div class="add-event-body">
                        <div class="add-event-input">
                            <input type="text" placeholder="Event Name" class="event-name" />
                        </div>
                        <div class="add-event-input">
                            <input type="text" placeholder="Event Time From" class="event-time-from" />
                        </div>
                        <div class="add-event-input">
                            <input type="text" placeholder="Event Time To" class="event-time-to" />
                        </div>
                        <div class="add-event-input">
                            <input type="text" placeholder="Description" class="event-description" />
                        </div>
                    </div>
                    <div class="add-event-footer">
                        <button class="add-event-btn">Add Event</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Calendar -->
    `))
    LoadCalendar();
    // var formatter_html = $("#Main-Screen").append(
    //   MainScreenFormatterTemplate()
    // );
  
    // // Iterate over groups
    // for (var groupId in Dict.groups) {
    //   if (Dict.groups.hasOwnProperty(groupId)) {
    //     var group = Dict.groups[groupId];
    //     var g = renderGroupMainScreen(
    //       $(formatter_html).find("#Main-Formatter").find("#Wrapper"),
    //       group,
    //       groupId,
    //       currentMode
    //     );
    //     //console.log(groupId);
    //     var task_html = $(g).find("#Task-Section");
    //     // Iterate over tasks
    //     for (var taskId in Dict.tasks) {
    //       if (
    //         Dict.tasks.hasOwnProperty(taskId) &&(
    //         group.tags.includes(Dict.tasks[taskId].tag) || group.def_tag == Dict.tasks[taskId].tag)
    //       ) {
    //         // Pass task details to renderTaskMainScreen
    //         renderTaskMainScreen(
    //           task_html,
    //           Dict.tasks[taskId],
    //           taskId,
    //           currentMode
    //         );
    //       }
    //     }
    //   }
    // }
    // renderFormatterAddons(formatter_html, currentMode);
  }

  //================================================================\\
  //========================== Initialize ==========================\\
  //================================================================\\

  function RefreshMainScreen() {
    $("#Main-Screen").empty();
   // $("#MMenu-Group-Section").empty();
    LoadMainScreen();
   // LoadGroups_Tag();
  }

  function LoadUser() {
    LoadGroups_Tag();
    RefreshMainScreen();
  }

  // Take all tags on Dict and put them in the "Select tag" dropdown
  function LoadTags() {
    console.log("Loading tags");

   // console.log(Dict.groups);
    var tagArray = Object.keys(Dict.tags).filter(key => Dict.tags[key].display === true);

    $("#crud-modal select#tags").empty();
    tagArray.forEach(element => {
      let options = `<option value="${element}">${Dict.tags[element].title}</option>`
      $("#crud-modal select#tags").append(options)
    });


    //$("#crud-modal select#tags").append(`<option value="None">None</option>`);

  };
  LoadTags();

  function LoadGroups() {
    console.log("Loading groups");
    var groupArray = Object.keys(Dict.groups);
    $("#crud-modal select#groups").empty();

    groupArray.forEach(element => {
        let options = `<option value="${element}">${Dict.groups[element].title}</option>`
        $("#crud-modal select#groups").append(options)
    });
  };
  LoadGroups();

  
  function initUser() {
    currentMMenuTab = 0; // 0-today 2-calendar 3-garden
    currentMode = 0;
    LoadUser();
    updateMMenuTabIndicator();
  }
  initUser();



  //================================================================\\
  //================================================================\\
  //================================================================\\

  //================================================================\\
  //========================= CRUD modal ===========================\\
  //================================================================\\
    // Create 

    $('#Main-Screen').on("click", ".Group-Task-Add", function(e){
        e.preventDefault();
        var gid = $(this).closest(".group-outer").attr("id")
        //console.log(gid);
        //console.log(Dict.groups[gid]);
        var preset_tag = Dict.groups[gid].def_tag; 
        // Clean modal first
        // Change modal state
        $("#crud-modal select#tags").append(`<option value="${preset_tag}">${Dict.groups[gid].title}</option>`);

        $('#crud-modal #colors-sec').hide();
        $('#crud-modal label[for="name"]').text("Title");
        $('#crud-modal label[for="description"]').text("Task Description");

        $('#crud-modal h3').text("Create Task");
        $('#crud-modal #name').val("");
        $('#crud-modal #description').val("");
        $('#crud-modal #tags option').removeAttr("selected");
        $('#crud-modal #tags').val(preset_tag);
        $('#crud-modal #todo-expired').val("");
        $('#crud-modal button[type="submit"]').html(`
        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        Create`);
        $('#crud-modal input[type="checkbox"]').attr("id", `task_`);

        // Show modal
        modal.show();
        e.stopPropagation();
    });

    // My work at U in CRUD modal  /// NULL -change the activate condition to prevent conflict with cancel button 
    $('#Main-Screen').on("click", ".Task-Edit", function(e){
      
      let id = $(this).closest(".task-outer").attr("id");
      let title = Dict.tasks[id].title;
      let desc = Dict.tasks[id].description;
      let tag = Dict.tasks[id].tag;
      let expired = Dict.tasks[id].deadline;
      console.log(id, desc);
      // Clean up
      // Clean modal first
      $('#crud-modal #colors-sec').hide();
      $('#crud-modal #delete-sec').show();

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
      console.log($('#crud-modal h3').text())
      // Get id from honeypot, if id is empty string, it means it's a new task
      let id = $('#crud-modal input[type="checkbox"]').attr("id").split("_")[1];
      let generateId = getUuid();
      // Get all input
      let mode = $('#crud-modal input[type="checkbox"]').attr("id").split("_")[0];
      let title = $('#crud-modal #name').val();
      let desc = $('#crud-modal #description').val();
      let tag = $('#crud-modal #tags').val();
      let group = $('#crud-modal #groups').val();
      let expired = $('#crud-modal #todo-expired').val();
      let color = $('#crud-modal #colors').val();
      console.log(mode, id, title, desc, tag, expired,color);
      // Before updatind Dict, check if tag is empty
      if (modal.isVisible()){

        if (id == ""){
            // Adding a new task to the tasks object within Dict
            Dict.tasks[generateId] = {
                title: title,
                description: desc,
                tag: tag,
              //  group: group,

                deadline: expired,
                points: 4,
            };

        
            // Call AJAX at /todo/create with JSON data
            AJAXcreateTask(generateId, title, desc, tag, expired, 4);
          }
          else {
            // Update Dict
            Dict.tasks[id].title = title;
            Dict.tasks[id].description = desc;
            Dict.tasks[id].tag = tag;
            Dict.tasks[id].deadline = expired;
            // Call AJAX at /todo/update with JSON data
            AJAXupdateTask(id, title, desc, tag, expired, 4);
          }
      }
      if (addGroupnTagModal.isVisible())
      {
          
          let action = "";
          if(isMakeChangeGroup == true){ 
            if(id ==""){  /// Create a new group

              ///deftag dict
              var def_tag_id = getUuid();
              var def_tag = Dict.tags[def_tag_id] = {
                title: title,
                color: randHexColor(),
                groupId: generateId,
                deleteable: false,
                editable: false,
                display: false,
              };

              /// group dict
              var g = Dict.groups[generateId] = {
                  title: title,
                  tags: [],
                  def_tag: def_tag_id,
                  color: color,
                  current_html: "",
              };

              

              $("#MMenu-Group-Section").append(MainMenuGroupTemplates(generateId, g));
              /// Main Screen Add 
              renderGroupMainScreen($("#Main-Formatter").find("#Wrapper"),g, currentMode);
              AJAXaddGroup(generateId, title, color);
            }
            else{ // Edit groups
              Dict.groups[id].title = title;
              Dict.groups[id].color = color;
              $("#MMenu-Group-Section").find("#"+id).find("#MMenu-Group-Title").text(title);
              generateId = id; // Keep the same id
              AJAXupdateGroup(id, title, color);
            }
            
          }
        else if(isMakeChangeGroup == false){  
          if(id ==""){  /// Create a new tags
            var t = Dict.tags[generateId] = {
              title: title,
              color: randHexColor(),

              groupId: group,
              deleteable: true,
              editable: true,
              display: true,

            };
            Dict.groups[group].tags.push(generateId);
            addNewTagMainMenu($("#"+group).find("#MMenu-Tag-Section"),generateId,t);
            AJAXaddTag(generateId, group, title, t.color);
          }
          else{ //Edit tags
              Dict.tags[id].title = title;
              Dict.tags[id].color = color;
              $("#MMenu-Group-Section").find("#"+id).find("#MMenu-Tag-Title").text(title);
              generateId = id; // Keep the same id
              AJAXupdateTag(id, group, title, color);
          }
          
        }

      }
      console.log(Dict);
      alert("Submitted");
      RefreshMainScreen();
      closeModal();
      //resetModalState();
      // window.location = window.location;
  })
  
  //Delete button
  $('#crud-modal #delete-sec').on("click", function(e){
    e.preventDefault();
      
      // Get id from honeypot, if id is empty string, it means it's a new task
      let id = $('#crud-modal input[type="checkbox"]').attr("id").split("_")[1];
      // Get all input
      let group = $('#crud-modal #groups').val();
    // Before updatind Dict, check if tag is empty
      if (modal.isVisible()){
        if (id != ""){
            // Deleting task
            delete Dict.tasks[id];
            var task_ = $('#'+id);
            task_.remove();
            // Call AJAX at /todo/delete with JSON data
            AJAXdeleteTask(id);
        }
      }
      if (addGroupnTagModal.isVisible())
      {
          if(isMakeChangeGroup == true){ 
            if(id !=""){  /// Delete a new group


              delete Dict.tags[Dict.groups[id].def_tag]; // Delete def tag
              delete Dict.groups[id]; // Delete group

              var group_ = $('#'+id);
              group_.remove();
              AJAXdeleteGroup(id);
            }
          }

        else if(isMakeChangeGroup == false){   ///  Delete a tag
          if(id !="")
          {
            var groupWithAccordingTag;
            Dict.groups = Object.fromEntries(
              Object.entries(Dict.groups).map(([key, value]) => {
                if (value.tags.includes(id)) {
                  //delete Dict.tasks[key];
                  value.tags = value.tags.filter(e => e !== id);
                  groupWithAccordingTag = key;
                }
                return [key, value];
              })
            );
            delete Dict.tags[id];

            Dict.tasks = Object.fromEntries(
              Object.entries(Dict.tasks).map(([key, value]) => {
                if (value.tag == id) {
                  value.tag = Dict.groups[groupWithAccordingTag].def_tag;
                }
                return [key, value];
              })
            );


            var tag_ = $('#'+id);
            tag_.remove();
            AJAXdeleteTag(id);
          }
        }

      }
      alert("Deleted: " + id);
      RefreshMainScreen();
      closeModal();
  })
  // When user clicked at list item, it will add tag to the task and also close dropdown
  function closeModal() { 
    console.log(Dict);
    modal.hide();
    addGroupnTagModal.hide();
    LoadTags();
  };
  // Close modal manually
  $('#btn-close-modal').click(function () {
      closeModal();
  });

  closeModal();
  //modal.show();

  //addGroupnTagModal.show()



})
// End of app.js