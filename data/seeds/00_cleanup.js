exports.seed = async function(knex) {
	await knex("recipe").truncate()
	await knex("ingreident").truncate()
	await knex("recipe_ingredient").truncate()
}