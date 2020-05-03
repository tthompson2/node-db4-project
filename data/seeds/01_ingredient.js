exports.seed = async function(knex) {
	await knex("ingredient").insert([   
		{ name: "Lettuce"},
    { name: "Tomato"},
    { name: "Beef"},
    { name: "Cheese"},
    { name: "chips"},
    {name: "fries"}, 
	])
}
