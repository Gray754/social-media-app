SELECT * 
FROM users u
JOIN user_info ui ON ui.user_id=u.id
WHERE username = $1