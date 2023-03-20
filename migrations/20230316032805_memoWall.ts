import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable('memo_wall')
    if (!hasTable) {
        await knex.schema.createTable('memo_wall', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('email').nullable();
            table.string('content', 255).notNullable();
            table.timestamps(false, true);
        })
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('memo_wall')
}

