module.exports = (sequalize, dataType) => {
    const Photos = sequalize.define("photos",
      {
        p_id: {
          type: dataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        p_name: { 
            type: dataType.STRING,
            allowNull: false
        },
        p_image: { 
            type: dataType.STRING,
            allowNull: false 
        }
      },
      {
        timestamps: true,
      }
    );
  
    return Photos;
};