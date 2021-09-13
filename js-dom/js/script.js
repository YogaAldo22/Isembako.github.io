
$(document).ready(function () {
    let todos = [
        {
            id: 1,
            task: "Perbaiki pelayanan dan metode pembayaran",
            status: true
        }
    ]

    function getTodos() {
        
        let boxTable = $('#t-body')
        for (let i = 0; i < todos.length; i++) {
            boxTable.append(`
                <tr>
                    <td>${todos[i].id}</td>
                    <td>${todos[i].task}</td>
                </tr>
            `)
        }
    }

    function addTodo(e) {
        e.preventDefault(); 
        let todoItem = $('#add-todo').val()
        let id;
        if (todos.length === 0) {
            id = 1
        } else {
            id = todos[todos.length - 1].id + 1;
        }
        todos.push({
            id,
            task: todoItem,
            status: false
        })
        console.log(todos);

        let boxTable = $('#t-body')
        boxTable.append(`
            <tr>
                <td>${id}</td>
                <td>${todoItem}</td>
            </tr>
        `)

    }

    let addBtn = $('#add-btn').click(e => addTodo(e))
    getTodos()

})

mibreitGallery.createGallery({

    // slideshow container
    slideshowContainer: "#full-gallery",
  
    // thumb view container
    thumbviewContainer: ".mibreit-thumbview",
  
    // image title container
    titleContainer: "#full-gallery-title",
  
    // determine whether to enable fullscreen mode
    allowFullscreen: !0,
  
    // image preloader
    preloadLeftNr: 2,
    preloadRightNr: 3,
  
    // SCALE_MODE_STRETCH, SCALE_MODE_FITASPECT (defualt), SCALE_MODE_NONE, SCALE_MODE_EXPAND
    scaleMode: SCALE_MODE_FITASPECT
  
  })