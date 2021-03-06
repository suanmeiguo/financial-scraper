
exports.up = function(Knex, Promise) {
    return Knex.schema.raw('CREATE SCHEMA usa').then(function() {
        return Knex.schema.withSchema('usa').createTable('stock_asset_allocation', function(table) {
            table.date('date').primary();
            table.decimal('percentage', 6, 5);
        });
    }).then(function() {
        return Knex.schema.withSchema('usa').createTable('sp_500_monthly', function(table) {
            table.date('date').primary();
            table.decimal('close', 10, 2);
            table.decimal('dividend', 15, 12);
            table.decimal('earnings', 15, 12);
            table.decimal('cpi', 12, 8);
            table.decimal('gs10', 4, 2);
            table.decimal('pe10', 4, 2);
            table.decimal('adjusted_close', 10, 2);
        });
    }).then(function() {
        return Knex.schema.withSchema('usa').createTable('sp_500_daily', function(table) {
            table.date('date').primary();
            table.decimal('value', 9, 3);
        });
    }).then(function() {
        return Knex.schema.withSchema('usa').createTable('unemployment_rate', function(table) {
            table.date('date').primary();
            table.decimal('percentage', 6, 3);
        });
    }).then(function() {
        return Knex.schema.withSchema('usa').createTable('recessions', function(table) {
            table.date('start_date').primary();
            table.date('end_date');
        });
    })
};

exports.down = function(Knex, Promise) {
    return Knex.schema.raw('DROP SCHEMA usa CASCADE');
};