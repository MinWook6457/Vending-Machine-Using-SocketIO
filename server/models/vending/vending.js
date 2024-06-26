
module.exports = (sequelize, DataTypes) => {
    const vending = sequelize.define(
        'vending',
        {
            id: { // 기본키
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                comment: '음료 고유 id',
            },
            beverage: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: '음료 이름'
            },
            price : { // 
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '음료 가격'
            },
            stock : {
                type : DataTypes.INTEGER,
                allowNull : false,
                comment : '음료 재고'
            },
            money : {
                type : DataTypes.INTEGER,
                allowNull : false,
                comment : '자판기 총액'
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false
            }
        },
        {
            timestamps: true,
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    )
 
    vending.associate = (models) => {
        vending.hasMany(models.Coin , { foreignKey: 'vending_id'})
    }
    return vending;
}