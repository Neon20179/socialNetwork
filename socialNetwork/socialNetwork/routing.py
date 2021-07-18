from django_channels_jwt_auth_middleware.auth import JWTAuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

import chat.routing

application = ProtocolTypeRouter({
    "websocket": JWTAuthMiddlewareStack(
        URLRouter(chat.routing.websocket_urlpatterns)
    ),
})
