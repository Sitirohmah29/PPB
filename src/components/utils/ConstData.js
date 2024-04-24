const UserList = [
    {id:1, username:"mira", email:"mira@student.ibik.ac.id", password:"mira@123"},
    {id:2, username:"carlos", email:"carlos@student.ibik.ac.id", password:"carlos@321"}
]

const ListBook = [
    {id:1, title:"Book 1", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_44732874-e1500057501374.jpg?auto=format&q=60&fit=max&w=930", author:"Sophie", rating:"1", views:100, sinopsis:"", story:"" },
    {id:2, title:"Book 2", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_78846510-e1500057445998.jpg?auto=format&q=60&fit=max&w=930", author:"nunu", rating:"2", views:100, sinopsis:"", story:"" },
    {id:3, title:"Book 3", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/catstronauts-e1500057907543.jpg?auto=format&q=60&fit=max&w=930", author:"rohmah", rating:"3", views:100, sinopsis:"", story:"" },
    {id:4, title:"Book 4", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_60780170-e1500058005996.jpg?auto=format&q=60&fit=max&w=930", author:"naila", rating:"4", views:100, sinopsis:"", story:"" },
    {id:5, title:"Book 5", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_73599840-e1500060411553.png?auto=format&q=60&fit=max&w=930", author:"andin", rating:"5", views:100, sinopsis:"", story:"" },
]

const Book = [
    {id:1, judul:"Book 1", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_44732874-e1500057501374.jpg?auto=format&q=60&fit=max&w=930", author:"Sophie", rating:"1", views:100, sinopsis:"", story:"" },
    {id:2, judul:"Book 2", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_78846510-e1500057445998.jpg?auto=format&q=60&fit=max&w=930", author:"nunu", rating:"2", views:100, sinopsis:"", story:"" },
    {id:3, judul:"Book 3", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/catstronauts-e1500057907543.jpg?auto=format&q=60&fit=max&w=930", author:"rohmah", rating:"3", views:100, sinopsis:"", story:"" },
    {id:4, judul:"Book 4", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_60780170-e1500058005996.jpg?auto=format&q=60&fit=max&w=930", author:"naila", rating:"4", views:100, sinopsis:"", story:"" },
    {id:5, title:"Book 5", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_73599840-e1500060411553.png?auto=format&q=60&fit=max&w=930", author:"andin", rating:"5", views:100, sinopsis:"", story:"" },
]

const ListCateg = [
    {id:1, name:"Recomendations", books:[1,3,5]},
    {id:2, name:"Recently", books:[6,5,4]},
    {id:3, name:"Populer", books:[3,2,1]},
]

const Genres = [
    {id:1, name:"Fiksi", icon:"", books:[1,3,5], aktif:"true"},
    {id:2, name:"Non Fiksi", icon:"", books:[1,3,5]},
    {id:3, name:"Komedi", icon:"", books:[1,3,5]},
    {id:4, name:"Horor", icon:"", books:[1,3,5]},
    {id:4, name:"Hewan", icon:"", books:[1,3,5]},
    {id:4, name:"Kerajaan", icon:"", books:[1,3,5]},
    {id:4, name:"Aksi", icon:"", books:[1,3,5]},
    {id:4, name:"Fiksi Ilmiah", icon:"", books:[1,3,5]},
    {id:4, name:"Edukasi", icon:"", books:[1,3,5]},
    {id:4, name:"Romansa", icon:"", books:[1,3,5]},
]

const History = [
    {user_id:1, book_id:1, viewed_at:"2024-05-20 10:00"},
    {user_id:1, book_id:2, viewed_at:"2024-05-20 10:00"},
]

const MyFavorite = [
    {user_id:1, books:[3,2,1]},
    {user_id:2, books:[4,2,3]}
]

export {UserList, ListBook, ListCateg, History, Genres, MyFavorite, Book}