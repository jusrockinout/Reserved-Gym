CREATE DATABASE thereserve;

USE thereserve;

INSERT INTO clients(first_name, last_name, address, birthdate, phone_number, auth_key, createdAt, updatedAt)
	VALUES ("Timothy", "Anderson", "123 Main Street", "00-00-00", 5555555555, "placeholder", "2000-01-01 00:00:00", "2000-01-01 00:00:00");
    
INSERT INTO equipment(machine_name, section, type, createdAt, updatedAt)
	VALUES ("Bench1", "Free-weights", "Weight Bench", "2000-01-01 00:00:00", "2000-01-01 00:00:00"),
	("Cable1", "Machines", "Cable-row", "2000-01-01 00:00:00", "2000-01-01 00:00:00"),
    ("Treadmill1", "Cardio", "Treadmill", "2000-01-01 00:00:00", "2000-01-01 00:00:00");
    
INSERT INTO appointments(time_stamps, duration, clientId, equipmentId, createdAt, updatedAt)
	VALUES ("2017-06-18 12:30:00", 15, 1, 1, "2000-01-01 00:00:00", "2000-01-01 00:00:00"),
    ("2017-06-18 12:45:00", 15, 1, 2, "2000-01-01 00:00:00", "2000-01-01 00:00:00"),
    ("2017-06-18 13:00:00", 30, 1, 3, "2000-01-01 00:00:00", "2000-01-01 00:00:00");