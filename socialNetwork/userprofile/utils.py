def _get_upload_path(instance, filename: str) -> str:
    if instance.__class__.__name__ == 'User':
        instance_path = instance.username
    elif instance.__class__.__name__ == 'UserImage':
        instance_path = instance.user.username

    return f'{instance.__class__.__name__}/{instance_path}/{filename}'
