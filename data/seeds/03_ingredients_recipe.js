exports.seed = async function(knex) {
	await knex("ingredient_recipe").insert([
		{ ingredient_id: 1, recipe_id: 1},
		{ ingredient_id: 1, recipe_id: 2},
	])
}
