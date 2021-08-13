def create_group_chat_serialize_ready_data(request):
    icon = request.FILES.getlist('icon')
    serialize_ready_data = {
        'users': [request.user.id] + list(map(int, request.data.get('users', default=[]))),
        'name': request.data.get('name')
    }
    
    if icon:
        serialize_ready_data['icon'] = icon[0]

    return serialize_ready_data
