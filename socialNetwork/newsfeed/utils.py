class CommentFound(Exception):
    pass


def create_comment_node_helper1(branch, replay_to: int, comment_data):
    if branch["id"] == replay_to:
        branch["children"].append(comment_data)
        raise CommentFound

    elif branch["children"]:
        for child in branch["children"]:
            if child["id"] == replay_to:
                child["children"].append(comment_data)
                raise CommentFound

            elif child["children"]:
                return create_comment_node_helper1(child, replay_to, comment_data)


def create_comment_node_helper(branch, replay_to: int, comment_data):
    if branch["id"] == replay_to:
        branch["children"].append(comment_data)
        raise CommentFound
    else:
        for child in branch["children"]:
            create_comment_node_helper(child, replay_to, comment_data)


def create_comment_node(comments_tree, replay_to, comment_data):
    for comment in comments_tree:
        try:
            create_comment_node_helper(comment, replay_to, comment_data)
        except CommentFound:
            break


def create_comments_tree(comments):
    comments_tree = []
    added_comments_ids = set()

    while comments:
        for comment in comments:
            comment["children"] = []

            if comment["replay_to"] in added_comments_ids or comment["replay_to"] is None:
                replay_to = comment.pop("replay_to")

                if replay_to in added_comments_ids:
                    create_comment_node(comments_tree, replay_to, comment)
                else:
                    comments_tree.append(comment)

                added_comments_ids.add(comment["id"])
                comment_index = comments.index(comment)
                comments.pop(comment_index)

    return comments_tree
