import { CallbackFunction } from 'db-migrate-base'

export function up(db: any, callback: CallbackFunction) {
  return db.addColumn(
    'payment',
    'id',
    {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    callback,
  )
}

export function down(db: any, callback: CallbackFunction) {
  return db.removeColumn('payment', 'id', callback)
}
