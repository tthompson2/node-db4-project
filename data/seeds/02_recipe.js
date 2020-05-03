exports.seed = async function(knex) {
	await knex("recipe").insert([
		{ name: "Taco" }, 
    { name: "Hamburger" },
    { name: "Chilli"}, 
	])
}
