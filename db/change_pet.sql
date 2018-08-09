UPDATE pets
SET 
pet_name = $1,
pet_age = $2
WHERE pet_id = $3;
